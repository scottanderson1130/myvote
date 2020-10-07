const router = require('express').Router();
const authCheck = (req, res, next) => {
  if (!req.user) {
    // If user is not logged in
    res.redirect('/auth/login');
  } else {
    next();
  }
};
router.get('/homepage', authCheck, (req, res) => {
  // NEW
  res.render('homepage');
});

module.exports = router;
