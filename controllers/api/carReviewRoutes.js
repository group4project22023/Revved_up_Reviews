const router = require("express").Router();
const { CarReview } = require("../../models");
const withAuth = require("../../utils/auth");

// Route for creating a new car review
router.post("/", withAuth, async (req, res) => {
  try {
    const newCarReview = await CarReview.create({
      title: req.body.title,
      carmake: req.body.make,
      carmodel: req.body.model,
      carReview: req.body.carReview,
      creator_id: req.session.user_id,
    });

    res.status(200).json(newCarReview);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route for deleting a car review
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const carReviewData = await CarReview.destroy({
      where: {
        id: req.params.id,
        creator_id: req.session.user_id,
      },
    });

    if (!carReviewData) {
      res.status(404).json({ message: "No car review found with this id!" });
      return;
    }

    res.status(200).json(carReviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
