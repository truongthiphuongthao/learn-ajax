const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./routes')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use('/', router)

// set view
app.set('views', './public/')
app.set('view engine', 'ejs')

app.listen(8080, function(){
	console.log("Server is starting at port 8080")
})