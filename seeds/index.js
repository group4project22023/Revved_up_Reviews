const sequelize = require("../config/connection");
const seedUser = require("./userData");
const seedCarReview = require("./carreviewData");
const seedComment = require("./commentData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedCarReview();

  await seedComment();

  process.exit(0);
};

seedAll();
