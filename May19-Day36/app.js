var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

// importing routers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var studentRouter = require('./routes/student');
var authRouter = require('./routes/AuthRouter');
var loginRouter = require('./routes/router');
var profileRouter = require('./routes/profile');
var dashboardRouter = require('./routes/dashboard');
 
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//routers
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/student', studentRouter);
app.use("/auth" , authRouter);
app.use("/auth", loginRouter);
app.use("/pro", profileRouter);
app.use("/dash", dashboardRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
