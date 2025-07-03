const express = require('express');
const router = express.Router();
const { ensureAuth } = require('../middleware/authMiddleware');
const User = require('../models/User');
const Post = require('../models/Post')

router.get('/profile',ensureAuth,async (req, res) => {
try {
    const user = await User.findById(req.session.user._id).lean();
    const posts = await Post.find({ author: req.session.user._id , isDeleted: false })
    .sort({ createdAt: -1 })
    .lean();

    res.render('profile', { user, posts });
} catch (error) {
    console.log(error);
    res.send('Profil sayfası yüklenirken bir hata oluştu.');
}

});


router.post('/delete-post/:id', ensureAuth, async (req, res) => {
  try {
    const post = await Post.findOne({
      _id: req.params.id,
      author: req.session.user._id // sadece kendi postunu silebilsin
    });

    if (!post) {
      return res.status(404).send("Post bulunamadı.");
    }

    post.isDeleted = true;
    await post.save();

    res.redirect('/profile');
  } catch (err) {
    console.log(err);
    res.status(500).send("Bir hata oluştu.");
  }
});

module.exports = router;