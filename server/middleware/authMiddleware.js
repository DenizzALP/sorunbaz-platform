function ensureAuth(req, res, next) {
  if (req.session.user) {
    return next(); // kullanıcı varsa devam et
  }
  res.redirect('/login'); // yoksa login sayfasına gönder
}

module.exports = { ensureAuth };