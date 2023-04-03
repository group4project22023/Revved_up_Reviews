const router = require("express").Router();
//add one more route
const userRoutes = require("./user-routes");
const userComment = require("./comment-routes");
router.use("/users", userRoutes);
router.use("/comments", userComment);

module.exports = router;
