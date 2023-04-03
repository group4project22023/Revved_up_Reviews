const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

//create new comment
router.post("/", withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      //may add more attributes in comment model, such as rate
      content: req.body.content,
      review_id: req.body.article_id,
      user_id: req.session.user_id,
      post_date: new Date(),
    });
    res.status(200).json(newComment);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
