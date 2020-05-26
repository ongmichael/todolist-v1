//require express and body-parser
const express = require('express');
const bodyParser = require('body-parser');

//create a constant called 'app' equal to express
const app = express();

//send the home directory to the browser and define the response to the browser
app.get('/', function(req, res){

var today = new Date();

if (today.getDay() === 6 || today.getDay() == 0){
  res.send('Yay it is the weekend');
} else {

  res.sendFile(__dirname + '/index.html');
}
});

//tell the app what port to listen to
app.listen(3000, function(){
  console.log('Im listening on 3000');
});
