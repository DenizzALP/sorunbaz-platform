const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');


router.get('/register', (req, res) => {
  // res.render('register');
  
  res.render('register', { errorMessage: null });
});

router.post('/register', async (req, res) => {
  const { userName, email, password } = req.body;


  const existingUserName = await User.findOne({ userName });
  const existingEmail = await User.findOne({email});

  if (existingUserName) {
    return res.render('register', { errorMessage: 'Bu kullanıcı adı zaten kullanılıyor.' });
  }

  if(existingEmail){
    return res.render('login', { errorMessage: 'Bu email zaten kullanılıyor.' });
  }



  await User.create({
    userName,
    email,
    password,
    bio: 'Yeni kullanıcı'
  });

  res.redirect('/login');
});

router.get('/login', (req, res) => {
  // res.render('login');

  res.render('login', { errorMessage: null });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // console.log('Gelen veriler:', req.body);

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.render('login', { errorMessage: 'E-posta veya  yanlış.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.render('login', { errorMessage: 'E-posta veya şifre yanlış.' });
    }


    req.session.user = {
      _id: user._id,
      userName: user.userName,
      email: user.email
    };

    res.redirect('/');
  } catch (err) {
    console.log(err);
    res.send('Bir hata oluştu.');
  }
});


// === LOGOUT
router.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      console.log('Oturum silinemedi:', err);
      return res.redirect('/');
    }
    res.redirect('/login');
  });
});


module.exports = router;