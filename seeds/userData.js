const { User } = require("../models");

const userData = [
  {
    username: "john_doe",
    password: "password123",
  },
  {
    username: "jane_doe",
    password: "password456",
  },
  {
    username: "car_enthusiast",
    password: "ilovecars789",
  },
  {
    username: "speed_fanatic",
    password: "fastcars000",
  },
  {
    username: "eco_driver",
    password: "greencars111",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
