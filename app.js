//require express and body-parser
const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

//create a constant called 'app' equal to express
const app = express();
const tasks = ['buy food','cook food', 'eat food'];
const workTasks = [];


//Use EJS template as view engine *optional
app.set('view engine', 'ejs');

//use body-parser parse the resposes
app.use(bodyParser.urlencoded({extended: true}));

// Tell app where our 'static' public files are (images, css, etc.)
app.use(express.static('public'));

//send the home directory to the browser and define the response to the browser
app.get('/', function(req, res){

  let day = date.getDay();

  res.render('list', {listTitle: day, taskList: tasks});

//recieve requests from browser input (task input)
app.post('/', function(req, res){

  let task = req.body.newTask;

  if (req.body.list == 'Work'){

    workTasks.push(task);
    res.redirect('/work');

  } else {

    tasks.push(task);
    res.redirect('/');

  }

});

app.get('/work', function(req, res){
  res.render('list', {listTitle: 'Work List', taskList: workTasks});

});

app.get('/about', function(req, res){
  res.render('about');

});

});

//tell the app what port to listen to
app.listen(3000, function(){
  console.log('Im listening on 3000');
});
