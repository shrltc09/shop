var mongoose=require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://shop:shop@ds129153.mlab.com:29153/shoppingcart_pay');
var Schema=mongoose.Schema;
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
var Table=mongoose.model('Table',prodschema);
var itemOne= new Table();
  itemOne._id="T1";
  itemOne.prodName="Coffee Table";
  itemOne.description="This coffee table from Royal Oak has a sleek look and elegant design that easily complements a variety of sofa sets. It can be used to create a cosy corner on your porch with a couple of garden chairs or as a centre table in the living room";
  itemOne.general="Sales Package: 1 Coffee Table; Model Number: Sydney; Primary Material Subtype: Rubber Wood; Finish Type: Polished; Primary Color: Brown; Style: Contemporary & Modern; Care Instructions: Wipe with a dry cloth. Wipe any spills immediately. Do not keep anything hot or cold directly on the surface. Keep away from direct sunlight or heat.; Number of Shelves: 1 ";
  itemOne.features="Rubber Wood; Width x Height x Depth 104.1 cm x 45.7 cm x 53.3 cm; Delivery Condition: Knock Down; Storage Included";
  itemOne.dimensions="Depth: 53.3 cm; Weight: 20 kg; Diameter: 0 mm";
  itemOne.imgurl="C:/Users/Shruthi/Downloads/shopping cart/new/project/public/assets/images/tb1.jpg";
  itemOne.price="999.00";
  itemOne.save(function(err){
  if(err) throw err;
  console.log('item saved'+itemOne);
});
var itemTwo= new Table();
itemTwo._id="T2";
itemTwo.prodName="Table";
itemTwo.description= "This product is made out pure sheesham wood. Care Instructions: This is a wood and we recommend customer to use tablecloth or any thick quality cloth for cleaning. Do not keep warm or cold items directly on a furniture surface, instead try using a hot pad or coasters. Items like hot tawa or baking dish or any other product that has a heated surface should not be kept on Furniture. Avoid keeping furniture next to windows or places where they are exposed to direct"+
" sunlight. Cleaning your furniture items every 3-4 months with furniture wax or furniture polish will help it maintain its look. Each of the Solid Wood Furniture is hand crafted by the finest artisans from Jodhpur. Wood grain, color variance, texture changes and knots are all part of the charm of the product and may, hence, vary from item to item. Changes of temperature and atmospheric moisture content may cause some movement."+ " While your place the order please check dimensions of the entrance/door to your home/office/shop/building/premise before buying, so as to ensure that there is no problem in getting the product inside. In such a situation we will not be able to accept return or cancellation. In case of a product that required assembly installation team will provide assistance for the same. However, each piece that requires assembly will have"+
" the required tool kits in the event you wish to assemble on your own. Please be careful and sure while placing the order for furntiure as these are made to order products. Every piece is specially manufactured for our esteemed customers.";
itemTwo.general="Sales Package: 1 Coffee Table; Model Number: KL-1628; Primary Material Subtype: Rosewood (Sheesham); Secondary Material Subtype: NA; Finish Type: Semi-Gloss; Primary Color: Brown; Style: Contemporary & Modern; Care Instructions: Clean with Soft Cloth, Wax rubdown is recommended after every 6 months; Foldable: No; Wheels Included: No";
itemTwo.features="Rosewood (Sheesham); Width x Height x Depth 80 cm x 35 cm x 80 cm; Delivery Condition: Pre-assembled";
itemTwo.dimensions="Depth: 80 cm; Weight: 15 kg; Diameter: 0 mm";
itemTwo.imgurl="C:/Users/Shruthi/Downloads/shopping cart/new/project/public/assets/images/tb2.jpg";
itemTwo.price="999.00";
itemTwo.save(function(err){
if(err) throw err;
console.log('item saved'+itemTwo);
});
