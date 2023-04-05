


const router = require("express").Router();
const carReviewRoutes = require('./carReviewRoutes');
const commentRoutes = require("./commentRoutes");
const userRoutes = require("./userRoutes");

router.use("/carReviews", carReviewRoutes);
router.use("/comments", commentRoutes);
router.use("/users", userRoutes);

module.exports = router;
