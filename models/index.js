// Here we define the index sequilize model

const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

User.hasMany(CarReview, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

CarReview.belongsTo(User, {
  foreignKey: 'user_id'
});

CarReview.hasMany(Comment,{
  foreignKey: 'blog_id'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id',
})

module.exports = { User, CarReview, Comment };