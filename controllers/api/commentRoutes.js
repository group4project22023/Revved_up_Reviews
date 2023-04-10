// Create Comment routes

const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// This route will post and create a new comment

router.post("/", withAuth, async (req, res) => {
  try {
    console.log("Request body:", req.body);
    console.log("User session:", req.session);

    const newComment = await Comment.create({
      comment_description: req.body.comment_description,
      carReview_id: req.body.carReview_id,
      commenter_id: req.session.user_id,
      date_commentcreated: new Date(),
    });

    console.log("New comment created:", newComment);
    res.json(newComment);
  } catch (err) {
    console.error("Error occurred while creating comment:", err);
    res.status(500).json(err);
  }
});

// This will route the delete function

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!commentData) {
      res.status(404).json({ message: "404 CarReview ID not found" });
      return;
    }
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
