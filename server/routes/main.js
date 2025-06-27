const express = require('express');
const router = express.Router();

//Routes
router.get('', (req , res) => {
    const locals = {
        title: "SORUNBAZ",
        description: "Sor ve Öğren"
    }
    res.render('index', {locals})
});

router.get('/about', (req, res) => {
    const locals = {
        title: "SORUNBAZ",
        description: "Sor ve Öğren"
    }

    res.render('about', {locals})
});

module.exports = router;