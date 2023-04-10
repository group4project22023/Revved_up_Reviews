const router = require("express").Router();

const commentRoutes = require("./commentRoutes");
const userRoutes = require("./userRoutes");
const carReviewRoutes = require("./carReviewRoutes");

router.use("/comments", commentRoutes);
router.use("/users", userRoutes);
router.use("/carReviews", carReviewRoutes);

module.exports = router;
