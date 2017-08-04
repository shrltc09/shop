var express=require('express');
var shoppingcontroller=require('./controllers/shoppingcontroller');
var app=express();
app.set('view engine','ejs');
app.use(express.static('./public'));
shoppingcontroller(app);
app.listen(3000);
console.log('You are listening to port 3000');
