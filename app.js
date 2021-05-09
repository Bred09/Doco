console.log('Hi, Bred!')


// Imports
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

	// exports
// routes
const routes = require('./routes');

// bodyParser | получение body из views
app.use(express.urlencoded({ extended: false }))

// Plugins
app.set('view engine', 'ejs')
app.use(express.static('public'))


	//Views
// home
app.use('/', routes.home)




// Start server
app.listen(PORT, () => {
	console.log(`Server Run on port: ${PORT}`)
})