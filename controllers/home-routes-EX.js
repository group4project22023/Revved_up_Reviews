const router = require('express').Router();
const { User, CarReview, Comment } = require('../models');
const withAuth = require('../utils/auth');

// This route will display all posts on homepage

router.get('/', async (req, res) => {
    try {
        const reviewData = await Review.findAll({
            include: [{
                model: User,
                attributes: ['username'],
            },],
        });

        const reviews = reviewData.map((review) => review.get({
            plain: true
        }));

        res.render('homepage', {
            reviews,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// This route will retrieve blogs according to its id

router.get('/review/:id', async (req, res) => {
    try {
        const reviewData = await review.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                }, {
                    model: Comment,
                    include: [
                        User
                    ]
                }
            ],
        });

        const review = reviewData.get({
            plain: true
        });

        res.render('Review', {
            ...review,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: {
                exclude: ['password']
            },
            include: [{
                model: Review
            }],
        });

        const user = userData.get({
            plain: true
        });

        res.render('dashboard', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
});

router.get('/signUp', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    res.render('signUp');
});

module.exports = router;