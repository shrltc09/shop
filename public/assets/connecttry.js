var bodyParser=require('body-parser');
var mysql = require('mysql');
var app=express();
var urlencodedParser = bodyParser.urlencoded({ extended: true });
app.post('/pay', urlencodedParser, function (req, res) {
	var fname=req.body.user;
	var lname=req.body.lname;
	var email=req.body.email;
	var phone=req.body.phno;
	var mop=req.body.payment;
	res.location('redirect');
	});
var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'shoppingcart'
});


con.connect(function(err) {
  if (err) throw err;
  var sql = "INSERT INTO shoppingcart_pay (fname, lname,email,phone,modeofpay) VALUES (fname,lname,email,phone,mop)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted, ID: " + result.insertId);
  });
});