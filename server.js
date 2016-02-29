var express = require('express');
var app = express();
var db=require('./database/connect-to-db.js');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/contactlist', function (req, res) {
  console.log('I received a GET request');

  db.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});

app.post('/contactlist', function (req, res) {
  console.log(req.body);
  var user = new db({
                      //need to add an email here 
                      name: req.body.name,
                      email: req.body.email,
                      mobilenumber: req.body.mobilenumber
                    });
  user.save(function(err,x){
     if(err)
     	console.log("unsuccessfull" + err);
     else
     {
     	console.log("successfull");
     	res.json(x);
     }
  
  });
});

app.delete('/contactlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.findByIdAndRemove(id,function(err,users){
	if(err)
	console.log("unsuccessfull");
    else
    {
		console.log("Running 'findByIdAndRemove' Successfully removed ID" + id);
    	console.log(users);
    	res.json(users);
    }
   });
  
});

app.get('/contactlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.findOne({ '_id' : id }, function (err, doc) {
	  res.json(doc);
  });
});



app.put('/contactlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(req.body.name);

  db.findByIdAndUpdate(id, { name: req.body.name, email: req.body.email, mobilenumber: req.body.mobilenumber }, 
                       {new: true},
					   function (err, doc) {
      res.json(doc);
    });
});

app.listen(8081);
console.log("Server running on port 8081");