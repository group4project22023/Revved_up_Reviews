const router = require("express").Router();
const { User, CarReview, Comment } = require("../models");
const withAuth = require("../utils/auth");

// This route will display all posts on homepage

router.get("/", async (req, res) => {
  try {
    const carReviewData = await CarReview.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const carReviews = carReviewData.map((carReview) =>
      carReview.get({
        plain: true,
      })
    );

    res.render("homepage", {
      carReviews,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// This route will retrieve reviews according to its id

router.get("/carReview/:id", async (req, res) => {
  try {
    const carReviewData = await CarReview.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    const carReview = carReviewData.get({
      plain: true,
    });

    const isCreator = req.session.user_id === carReview.creator.id;

    res.render("carReview", {
      ...carReview,
      logged_in: req.session.logged_in,
      isCreator,
      googleApiKey: process.env.GOOGLE_API_KEY,
      searchEngineId: process.env.SEARCH_ENGINE_ID,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// for dashboard
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const userId = req.session.user_id;

    const dbcarReviewData = await CarReview.findAll({
      where: {
        creator_id: userId,
      },
      include: [
        {
          model: User,
          as: "creator",
        },
      ],
    });

    const carReviews = dbcarReviewData.map((review) =>
      review.get({ plain: true })
    );

    res.render("dashboard", { carReviews, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: {
        exclude: ["password"],
      },
      include: [
        {
          model: CarReview,
        },
      ],
    });

    const user = userData.get({
      plain: true,
    });

    res.render("dashboard", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }

  res.render("login");
});

router.get("/signUp", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }
  res.render("signUp");
});

module.exports = router;
