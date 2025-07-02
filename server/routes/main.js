const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Post = require('../models/Post')
const BanLog = require('../models/BanLog')
const Comment = require('../models/Comment')
const Rating = require('../models/Rating')
const User = require('../models/User')
const UserProfile = require('../models/UserProfile')


//Routes
router.get('', async (req, res) => {
  try {
    const locals = {
      title: "SORUNBAZ",
      description: "Sor ve Öğren"
    };

    let perPage = 10;  // Her sayfada gösterilecek kayıt sayısı
    let page = parseInt(req.query.page) || 1;  // URL'den ?page parametresini al, yoksa 1. sayfa

    // Toplam kaç kayıt olduğunu öğren (sayfa sayısı için)
    const count = await Post.countDocuments({});

    // Verileri sırala, atla ve limite göre getir (sayfa sayfa)
    const data = await Post.find()
      .populate('author', 'userName')
      .sort({ createdAt: -1 })
      .skip((page - 1) * perPage)  // Önceki sayfalardaki kayıtları atla
      .limit(perPage)              // Sadece perPage kadar kayıt getir
      .lean();

    // Sonraki sayfa numarasını belirle
    const nextPage = page + 1;

    // Sonraki sayfa var mı? (Toplam sayfa sayısından küçük mü?)
    const hasNextPage = nextPage <= Math.ceil(count / perPage);

    // Önceki sayfa var mı? (Sayfa 1'den büyükse evet)
    const hasPrevPage = page > 1;

    // Template'e gönder
    res.render('index', {
      locals,
      data,
      current: page,
      nextPage: hasNextPage ? nextPage : null, // Sonraki sayfa yoksa null yap
      hasPrevPage,
      totalPages: Math.ceil(count / perPage), // Toplam sayfa sayısı
      currentRoute: '/'
    });

  } catch (error) {
    console.log(error);
  }
});

// router.get('/post/:id', async (req,res) =>{
//     try {
//         let slug = req.params.id;
//         const post = await Post.findById({_id: slug});

//         const locals = {
//         title: "SORUNBAZ",
//         description: "Sor ve Öğren"
//         };

//         res.render('post', {
//             locals,
//             post,
//             currentRoute: `/post/${slug}`
//         });

//     }catch(error){
//         console.log(error)
//     }
// })
router.get('/post/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate('author', 'userName')
      .lean();

    const comments = await Comment.find({ post: req.params.id })
      .populate('author', 'userName')
      .sort({ createdAt: -1 })
      .lean();

    res.render('post', { post, comments }); 
  } catch (err) {
    console.log(err);
    res.send('Post bulunamadı.');
  }
});



router.get('/about', (req, res) => {
    const locals = {
        title: "SORUNBAZ",
        description: "Sor ve Öğren"
    }

    res.render('about', {locals})
});

router.get('/search', async (req, res) => {
  const query = req.query.q;
  const page = parseInt(req.query.page) || 1;
  const perPage = 5;


  try {
    const filter = {
      isDeleted: false,
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { content: { $regex: query, $options: 'i' } }
      ]
    };

    const count = await Post.countDocuments(filter);

    const data = await Post.find(filter)
      .populate('author', 'userName')
      .sort({ createdAt: -1 })
      .skip((page - 1) * perPage)
      .limit(perPage)
      .lean();

    const hasNextPage = page * perPage < count;
    const nextPage = page + 1;
    const hasPrevPage = page > 1;

    res.render('index', {
      locals: {
        title: `Arama Sonuçları: "${query}"`,
        description: 'Arama sonuçları'
      },
      data,
      current: page,
      nextPage: hasNextPage ? nextPage : null,
      hasPrevPage,
      totalPages: Math.ceil(count / perPage),
      currentRoute: '/search?q=' + query
    });
  } catch (err) {
    console.error(err);
    res.send('Arama sırasında bir hata oluştu.');
  }
});

// async function insertPostData() {
//   const dummyUserId = new mongoose.Types.ObjectId(); // test kullanıcı ID'si

//   const posts = Array.from({ length: 15 }, (_, i) => ({
//     title: `Test Gönderisi ${i + 1}`,
//     content: `Bu, ${i + 1}. test gönderisinin içeriğidir. İçerik örnek olarak yazılmıştır.`,
//     author: dummyUserId,
//     tags: ['test', 'örnek', `etiket${i + 1}`],
//     comments: [],
//     likes: Math.floor(Math.random() * 100), // rastgele beğeni sayısı
//     ratings: [],
//     isDeleted: false
//   }));

//   await Post.insertMany(posts);
//   console.log('15 post başarıyla eklendi!');
// }

// insertPostData().catch(console.error)





// async function insertPostData() {
//   const dummyUserId = new mongoose.Types.ObjectId(); // tek kullanıcı ID'si

//   const user = {
//     _id: dummyUserId,
//     userName: "Test Kullanıcı",
//     email: "test@example.com",
//     password: "sifre"
//   };

//   const posts = Array.from({ length: 15 }, (_, i) => ({
//     title: `Test Gönderisi ${i + 1}`,
//     content: `Bu, ${i + 1}. test gönderisinin içeriğidir.`,
//     author: dummyUserId, // aynı kullanıcıya bağlı
//     tags: ['test', 'örnek', `etiket${i + 1}`],
//     comments: [],
//     likes: Math.floor(Math.random() * 100),
//     ratings: [],
//     isDeleted: false
//   }));

//   await User.create(user);
//   await Post.insertMany(posts);
//   console.log('1 kullanıcı ve 15 post başarıyla eklendi!');
// }

// insertPostData().catch(console.error)

module.exports = router;



// //Routes
// router.get('', async (req , res) => {

//     try {
//         const locals = {
//             title: "SORUNBAZ",
//             description: "Sor ve Öğren"
//         }

//         const data = await Post.find()
//             .populate('author', 'userName')
//             .sort({ createdAt: -1 })
//             .lean();     
//         res.render('index', {locals, data})
//     } catch (error) {
//         console.log(error)
//     }
// });
