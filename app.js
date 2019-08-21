//Load express module with `require` directive
var express = require('express')
var app = express()
var packageObj = require('./package.json')
//var exports = module.exports = {};

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Hello World')
})


//Launch listening server on port 3000
var server = app.listen(3000, function () {
  console.log('App listening on port 3000!')
})

/*
httpServer = require('http').createServer(app);
httpServer.listen('3000');
// Then close the server when done...
*/


app.get('/health', function (req, res) {
	var testResult = {"message": "", "Status": ""}
	testResult.message = "Application is up and running";
	testResult.status = "200";
  //res.status(testResult.status).json(testResult);
  res.send(testResult);
});



app.get('/metadata', function (req, res) {
	var metadata = {"name": "", "version": "", "description":""}
	metadata.name = packageObj.name;
	metadata.version = packageObj.version;
	metadata.description = packageObj.description;
  //res.status(testResult.status).json(testResult);
  res.send(metadata);
});


