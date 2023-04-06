// Here we define the index sequilize model

const User = require("./User");
const CarReview = require("./carReview");
const Comment = require("./Comment");

User.hasMany(CarReview, {
  foreignKey: "creator_id",
  onDelete: "CASCADE",
});

CarReview.belongsTo(User, {
  foreignKey: "creator_id",
  as: "creator",
});

CarReview.hasMany(Comment, {
  foreignKey: "carReview_id",
});

Comment.belongsTo(CarReview, {
  foreignKey: "carReview_id",
});

Comment.belongsTo(User, {
  foreignKey: "commenter_id",
});

User.hasMany(Comment, {
  foreignKey: "commenter_id",
  onDelete: "CASCADE",
});

module.exports = { User, CarReview, Comment };
