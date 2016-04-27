var http = require('http');
var fs = require('fs');
var formidable = require("formidable");
var qs = require('querystring');
var url = require('url');
var util = require('util');

var server = http.createServer(function (req,res) {
	if (req.method.toLowerCase() == 'get') {
		//console.log("?");
		displayForm(res);
	}
	else if (req.method.toLowerCase() == "post") {
		//console.log("??");
		processAllFieldsOfTheForm(req,res);
	}
});

function displayForm(res) {
	console.log("in GET");
	fs.readFile('index.html', function (err,data) {
		res.writeHead(200, {'Content-Type': 'text/html',
							'Content-Length': data.length
		});
		res.write(data);
		res.end();
	});
}

function processAllFieldsOfTheForm(req,res) {
	console.log("in POST");
	var form = new formidable.IncomingForm();
	form.parse(req, function(err,fields,files) {
		res.writeHead(200, {
			'content-type' : 'text/plain'
		});
		res.write('received the data:\n\n');
		res.end(util.inspect({
			fields:fields,
			files:files
		}));
	});
}

server.listen(8888)
console.log('server running at http://127.0.0.1:8888');