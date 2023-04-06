// Set up Car Review routes
const router = require('express').Router();
const { CarReview } = require('../../models');
const withAuth = require('../../utils/auth');

// Define and create Post routes

router.post('/', withAuth, async (req, res) => {
  try {
    const newCarReview = await CarReview.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newCarReview);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Define and create delete routes
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const carReviewData = await CarReview.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!carReviewData) {
      res.status(404).json({ message: '404 carReview ID not found' });
      return;
    }

    res.status(200).json(carReviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;