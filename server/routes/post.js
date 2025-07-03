const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const { ensureAuth } = require('../middleware/authMiddleware');

router.get('/edit-post/:id', ensureAuth, async (req, res) => {
  try {
    const post = await Post.findOne({
      _id: req.params.id,
      author: req.session.user._id // sadece kendi postunu düzenleyebilir
    }).lean();

    if (!post) return res.status(404).send('Post not found.');

    res.render('edit-post', { post });
  } catch (err) {
    console.log(err);
    res.status(500).send('Sunucu hatası');
  }
});

router.post('/edit-post/:id', ensureAuth, async (req, res) => {
  try {
    const { title, content, tags } = req.body;

    await Post.findOneAndUpdate(
      { _id: req.params.id, author: req.session.user._id },
      {
        title,
        content,
        tags: tags.split(',').map(tag => tag.trim())
      }
    );

    res.redirect('/profile');
  } catch (err) {
    console.log(err);
    res.status(500).send('Post güncellenemedi.');
  }
});


module.exports = router;