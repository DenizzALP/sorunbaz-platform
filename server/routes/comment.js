const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');
const Post = require('../models/Post');

router.post('/comment/:postId', async (req, res) => {
  if (!req.session.user) return res.redirect('/login');

  try {
    await Comment.create({
      content: req.body.content,
      author: req.session.user._id,
      post: req.params.postId
    });

    

    res.redirect('/post/' + req.params.postId);
  } catch (err) {
    console.log(err);
    res.send('Yorum eklenirken hata oluştu');
  }
});

module.exports = router;
