const router = require("express").Router();
//Assume we have these three model
const { Review, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

// GET all reviews for homepage
router.get("/", async (req, res) => {
  try {
    const dbReviewData = await Review.findAll({
      order: [["post_date", "DESC"]],
      include: [
        {
          model: User,
          as: "creator",
        },
      ],
    });

    const reviews = dbReviewData.map((review) => review.get({ plain: true }));
    //handerbar name
    res.render("homepage", {
      reviews,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// direct to one review
router.get("/review/:id", withAuth, async (req, res) => {
  try {
    const reviewData = await Review.findByPk(req.params.id, {
      include: [
        {
          //comment's data
          model: Comment,
          include: {
            model: User,
          },
          order: [["comment_date", "DESC"]],
        },
        {
          //author's data
          model: User,
          as: "creator",
        },
      ],
    });

    if (!reviewData) {
      res.status(404).json({ message: "No review found with this id!" });
      return;
    }

    const review = reviewData.get({ plain: true });
    //to check if the user is the author, author can edit review
    const isCreator = req.session.user_id === review.creator.id;

    res.render("review", {
      ...review,
      loggedIn: req.session.loggedIn,
      isCreator,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//write new review page
// Add a new route for rendering the "New Review" form
router.get("/new-review", withAuth, (req, res) => {
  res.render("new-review");
});

// Add a new route for handling the form submission
router.post("/new-review", withAuth, async (req, res) => {
  try {
    const newReview = await Review.create({
      title: req.body.title,
      content: req.body.content,
      make: req.body.make,
      model: req.body.model,
      year: req.body.year,
      post_date: new Date(),
      user_id: req.session.user_id,
    });
    res.status(200).json(newReview);
  } catch (err) {
    res.status(400).json(err);
  }
});

// route to the page that only contains current user's reviews
router.get("/myreview", withAuth, async (req, res) => {
  try {
    //userId is the current login user's id
    const userId = req.session.user_id;

    const dbReviewData = await Review.findAll({
      where: {
        //user_id is the reviews' user_id
        user_id: userId,
      },
      order: [["post_date", "DESC"]],
      include: [
        {
          model: User,
          as: "creator",
        },
      ],
    });

    const review = dbReviewData.map((review) => review.get({ plain: true }));
    //only render the page when login
    res.render("myreview", { review, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//route to the page that user can edit their review
router.get("/edit-review/:id", withAuth, async (req, res) => {
  try {
    const dbReviewData = await Review.findByPk(req.params.id, {
      include: [
        {
          model: User,
          as: "creator",
        },
      ],
    });

    if (!dbReviewData) {
      res.status(404).json({ message: "No review found with this id" });
      return;
    }

    const reviewData = dbReviewData.get({ plain: true });
    //check whether current user is the review author
    if (reviewData.user_id !== req.session.user_id) {
      res
        .status(403)
        .json({ message: "You are not authorized to edit this review" });
      return;
    }
    //render the page: edit-review
    res.render("edit-review", {
      review: reviewData,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//route to update edited review
router.put("/edit-review/:id", withAuth, async (req, res) => {
  try {
    const reviewId = req.params.id;
    const { title, content } = req.body;

    const review = await Review.findByPk(reviewId);

    if (!review) {
      res.status(404).json({ message: "No review found with this id" });
      return;
    }

    if (review.user_id !== req.session.user_id) {
      res
        .status(403)
        .json({ message: "You are not authorized to edit this review" });
      return;
    }
    //update review content and title
    await Review.update(
      {
        // do we allow author to edit car information?
        title,
        content,
        post_date: new Date(),
      },
      {
        //update to the review table id equal to current review id
        where: {
          id: reviewId,
        },
      }
    );

    res.status(200).json({ message: "Review updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/search", async (req, res) => {
  try {
    const { car_model, car_make } = req.query;

    let whereClause = {};
    if (car_model) {
      whereClause.model = car_model;
    }
    if (car_make) {
      whereClause.make = car_make;
    }
    //get the review data fullfill the requirements
    const dbReviewData = await Review.findAll({
      where: whereClause,
      include: [
        {
          model: User,
          as: "creator",
        },
      ],
    });

    const reviews = dbReviewData.map((review) => review.get({ plain: true }));

    res.render("search-result", {
      reviews,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
/* JSX example in homepage:
<form method="GET" action="/search">
  <label for="car_make">Car Make:</label>
  <select name="car_make" id="car_make">
    <option value="">Select Car Make</option>
    <!-- Add options for car makes here -->
  </select>

  <label for="car_model">Car Model:</label>
  <select name="car_model" id="car_model">
    <option value="">Select Car Model</option>
    <!-- Add options for car models here -->
  </select>

  <button type="submit">Search</button>
</form>

*/

// Login route
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

module.exports = router;
