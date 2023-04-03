const router = require("express").Router();

const userRoutes = require("./user-routes");
const userComment = require("./comment-routes");
router.use("/users", userRoutes);
router.use("/comments", userComment);

module.exports = router;
