// Here we define the index sequilize model

const User = require('./User');
const CarReview = require('./carReview');
const Comment = require('./Comment');

User.hasMany(CarReview, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

CarReview.belongsTo(User, {
  foreignKey: 'user_id'
});

CarReview.hasMany(Comment,{
  foreignKey: 'carReview_id'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id',
})

module.exports = { User, CarReview, Comment };