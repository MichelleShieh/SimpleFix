var mysql = require("mysql");
var connection = mysql.createConnectino({
	host : 'localhost',
	user : 'root',
	password: '',
	database : 'userResearch'
});

connection.connect();

connection.query('SELECT * from userResearch',function(err,rows,fields) {
	if (!err) console.log('The result is: ', rows);
	else console.log('Error while performing Query.');
});

connection.end();