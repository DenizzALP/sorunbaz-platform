const express = require('express');
const router = express.Router();
const { ensureAuth } = require('../middleware/authMiddleware');
const Post = require('../models/Post');

router.get('/create-post', ensureAuth,  (req, res) => {
    res.render('create-post' )
});


router.post('/create-post', ensureAuth,async (req, res) => {
     if (!req.session.user) return res.redirect('/login');
    const tags = req.body.tags
    ? req.body.tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0)
    : [];

     try {
        await Post.create({
            title: req.body.title,
            content: req.body.content,
            author: req.session.user._id,
            tags: tags
        })

         res.redirect('/');
     } catch (error) {
        
     }
});


module.exports = router;