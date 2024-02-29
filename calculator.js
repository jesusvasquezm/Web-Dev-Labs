// npm install -g nodemon
// npm install express
const express = require("express");
// npm install body-parser
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
////////////////////////////////////////////////////////////////////
app.get("/", function(req, res) {
  // res.send("Hello World!!");
  // __dirname = (directory name) it looks for the location folder to search for your html
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);

  var result = num1 + num2;
  res.send("The result of your calculation is " + result);
});

// bmi server
app.get("/bmicalculator", function(req, res) {
res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function(req,res){
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var bmi = weight / (height * height);

  res.send("Yout BMI is " + bmi);
});
/////////////////////////////////////////////////////////////////
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
