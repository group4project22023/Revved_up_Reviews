const { CarReview } = require("../models");

const carreviewData = [
  {
    title: "Amazing Electric Car: Tesla Model S",
    carReview:
      "The Tesla Model S is an outstanding electric car with impressive performance and range. The interior is spacious, and the technology features are top-notch.",
    carmake: "Tesla",
    carmodel: "Model S",
    creator_id: 1,
    date_reviewcreated: "2021-06-01 15:11:45",
  },
  {
    title: "Luxury SUV: Range Rover",
    carReview:
      "The Range Rover is a luxurious SUV that offers a comfortable ride and a well-appointed interior. The off-road capabilities are exceptional, making it a versatile vehicle for various terrains.",
    carmake: "Land Rover",
    carmodel: "Range Rover",
    creator_id: 2,
    date_reviewcreated: "2021-05-14 12:57:33",
  },
  {
    title: "Family Sedan: Honda Accord",
    carReview:
      "The Honda Accord is a reliable family sedan with excellent fuel efficiency and a spacious cabin. It offers a smooth ride and a suite of advanced safety features.",
    carmake: "Honda",
    carmodel: "Accord",
    creator_id: 3,
    date_reviewcreated: "2021-09-01 14:56:34",
  },
  {
    title: "Sporty Hatchback: Volkswagen Golf GTI",
    carReview:
      "The Volkswagen Golf GTI is a sporty hatchback that offers a fun driving experience, combining performance and practicality. The interior is well-built and offers a generous amount of space for passengers and cargo.",
    carmake: "Volkswagen",
    carmodel: "Golf GTI",
    creator_id: 4,
    date_reviewcreated: "2021-08-06 04:25:22",
  },
  {
    title: "Hybrid Option: Toyota Prius",
    carReview:
      "The Toyota Prius is a popular hybrid car that boasts impressive fuel economy and a comfortable ride. It offers ample cargo space and comes with a variety of standard safety features.",
    carmake: "Toyota",
    carmodel: "Prius",
    creator_id: 5,
    date_reviewcreated: "2021-07-27 10:34:24",
  },
];

const seedCarReview = () => CarReview.bulkCreate(carreviewData);

module.exports = seedCarReview;
