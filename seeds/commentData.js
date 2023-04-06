const { Comment } = require("../models");

const commentData = [
  {
    comment_description: "Great review! I love this car too.",
    carReview_id: 1,
    commenter_id: 2,
    date_commentcreated: "2023-06-01 15:57:24",
  },
  {
    comment_description: "I disagree, I think this car has a lot of issues.",
    carReview_id: 2,
    commenter_id: 1,
    date_commentcreated: "2023-01-01 12:06:50",
  },
  {
    comment_description:
      "I test drove this car and was impressed with its performance.",
    carReview_id: 3,
    commenter_id: 4,
    date_commentcreated: "2023-01-07 16:50:15",
  },
  {
    comment_description: "I like the fuel efficiency of this car.",
    carReview_id: 4,
    commenter_id: 5,
    date_commentcreated: "2023-08-01 12:36:15",
  },
  {
    comment_description: "I think this car is overrated.",
    carReview_id: 5,
    commenter_id: 3,
    date_commentcreated: "2023-05-06 12:53:22",
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
