var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://shop:shop@ds129153.mlab.com:29153/shoppingcart_pay');
var Schema=mongoose.Schema;
autoIncrement.initialize(mongoose);
var payschema= new Schema({
  _id: Number,
  fname: String,
  lname: String,
  email: String,
  phone: Number,
  price: Number,
  mop: String,
  cno: Array,
  epm: Number,
  epy: Number,
  cvv: Number,
  bank: String,
  time: Date
});
var prodschema= new Schema({
  _id: String,
  prodName: String,
  description: String,
  general: String,
  features: String,
  dimensions: String,
  imgurl: String,
  price: Number
});
var Kitchen=mongoose.model('Kitchen',prodschema);
var Bedroom=mongoose.model('Bedroom',prodschema);
var Living=mongoose.model('Living',prodschema);
var Wadrobe=mongoose.model('Wadrobe',prodschema);
var Table=mongoose.model('Table',prodschema);
payschema.plugin(autoIncrement.plugin,'Pay');
var Pay=mongoose.model('Pay',payschema);

module.exports = function(app){

  app.get('/shopping',function(req,res) {
    res.render('shopping');
  });
  app.get('/kitchen',function(req,res) {
    Kitchen.find({},function(err,data){
      if (err) throw err;
      res.render('kitchen',{kitchens: data});
  });
});
  app.get('/bedroom',function(req,res) {
    Bedroom.find({},function(err,data){
      if (err) throw err;
      res.render('bedroom',{bedrooms: data});
  });
});
  app.get('/living',function(req,res){
    Living.find({},function(err,data){
      if (err) throw err;
      res.render('living',{livings: data});
  });
});
  app.get('/wadrobe',function(req,res) {
    Wadrobe.find({},function(err,data){
      if (err) throw err;
      res.render('wardrobe',{wadrobes: data});
  });
});
  app.get('/table',function(req,res){
    Table.find({},function(err,data){
      if (err) throw err;
      res.render('table',{tables: data});
  });
});
  app.get('/payment',function(req,res) {
     var data=req.params.price;
    res.render('payment',{prices:data});
  });
  app.post('/payment',urlencodedParser,function(req,res) {
    var itemOne= new Pay();
      itemOne.fname=req.body.user;
      itemOne.lname=req.body.lname;
      itemOne.mail=req.body.email;
      itemOne.phone=req.body.phno;
      itemOne.mop=req.body.pay;
      itemOne.cno=req.body.cno;
      itemOne.epm=req.body.epm;
      itemOne.epy=req.body.epy;
      itemOne.cvv=req.body.cvv;
      itemOne.bank=req.body.banks;
      itemOne.time=new Date();
      itemOne.save(function(err){
      if(err) throw err;
      console.log('item saved'+itemOne);
    });
    res.render('redirect');

  });
  app.get('/redirect',function(req,res) {
    res.render('redirect');
  });
};
