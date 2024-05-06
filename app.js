
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const connectDB = require('./config/database');

const app = express();


const dbConfig = require('./config/database');

// Connect to MongoDB
// mongoose.connect(dbConfig.dbURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('MongoDB connection error:', err));

connectDB();


app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');


app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));


app.use(passport.initialize());
app.use(passport.session());
require('./config/passport');

app.use(flash());


app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});


app.use(require('./routes/index'));
app.use(require('./routes/authRoutes'));
app.use(require('./routes/instanceRoutes'));
app.use(require('./routes/databaseRoutes'));
app.use(require('./routes/userRoutes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
