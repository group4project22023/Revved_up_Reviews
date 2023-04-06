const sequelize = require('../config/connection');
const { User, CarReview, Comment } = require('../models');

const carReviewData = require('./carReviewData.json');
const commentData = require('./commentData.json');
const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const carReview of carReviewData) {
    await CarReview.create({
      ...carReview,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  const comments = await Comment.bulkCreate(commentData, {
    returning: true,
  });

  process.exit(0);
};

seedDatabase();