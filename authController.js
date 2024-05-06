
const passport = require('passport');

exports.getLoginPage = (req, res) => {
  res.render('login');
};

exports.postLogin = passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/login',
  failureFlash: true
});

exports.getSignupPage = (req, res) => {
  res.render('signup');
};

exports.postSignup = async (req, res) => {
  try {
    
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });
    await newUser.save();
    req.flash('success_msg', 'You are now registered and can log in');
    res.redirect('/login');
  } catch (error) {
    
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.logout = (req, res) => {
  req.logout();
  res.redirect('/login');
};
