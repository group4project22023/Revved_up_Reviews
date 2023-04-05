const router = require("express").Router();
//add one more route
const CarReviewRoutes = require('./carReview-routes');
const userRoutes = require("./user-routes");
const userComment = require("./comment-routes");
router.use("/users", userRoutes);
router.use("/comments", userComment);
router.use("/carReviews", CarReviewRoutes);

module.exports = router;
