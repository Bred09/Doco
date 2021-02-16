// Imports
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const passport = require('passport');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const multer = require('multer');
	// exports
// routes
const routes = require('./routes');
const keys = require('./config/keys');
 	// db
	const mysql = require('./db');

// Plugins
app.set('view engine', 'ejs')
app.use(express.static('public'));
// Passport config
require('./config/passport')(passport);

// bodyParser
app.use(express.urlencoded({ extended: false }))

// expressSession
app.use(session({
	secret: 'myNewSecretKeyInProjectCookiAndEmmOkIAll:)',
	maxAge: 1000*60*60*24*7,
	resave: false,
	saveUninitialized: false,
	store: new FileStore()
}))

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

	//Views
// home
app.use('/', routes.home);

// KITCHEN
app.use('/kitchen', routes.kitchen);

//  login
app.use('/auth', routes.auth);


// chat with users
app.get('/chat', (req, res) => {
	res.render('chat');
});
// sharing recepts
app.use('/recipe', routes.recipe);
// About us
app.get('/about_us', (req, res) => {
	res.render('about_us');
});
// Apps
app.get('/apps', (req, res) => {
	res.render('apps');
});
// profile
app.use('/profile', routes.profile);




// Start server
app.listen(PORT, () => {
	console.log(`Server Run on port: ${PORT}`)
})
