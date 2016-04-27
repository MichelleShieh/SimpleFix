var express = require('express')
var port = process.env.PORT || 3000
var path = require('path')
var app = express()

app.set('views','./views/pages')
app.set('view engine', 'jade')
app.use(express.static(path.join(__dirname, 'bower_components')))
//app.use(express.bodyParser())
app.listen(port)

console.log('webiste started on port ' + port)

//index page
app.get('/',function(req, res) {
	res.render('index', {
		title: 'simple fix'
	})
})