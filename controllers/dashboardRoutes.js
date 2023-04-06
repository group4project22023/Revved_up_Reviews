const router = require('express').Router();
const { User, CarReview, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const carReviewData = await CarReview.findAll({
            include: [{
                model: User,
                attributes: ['username'],
            },],
        });

        const carReviews = carReviewData.map((carReview) => carReview.get({
            plain: true
        }));
        console.log(carReviewData);
        console.log(carReviews);
        res.render('dashboard', {
            carReviews,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;