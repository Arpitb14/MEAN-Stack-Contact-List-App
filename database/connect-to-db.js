var mongoose = require('mongoose');
mongoose.connect("mongodb://testadmin:testadminpass@ds019068.mlab.com:19068/contact-list-db-test");

var Schema = mongoose.Schema;

var userSchema = new Schema({
name:{type:String,required:true},
email:{type:String,required:true,unique:true},
mobilenumber:{type:Number,required:true}
},{collection:"Users"});

var contact=mongoose.model('contact',userSchema);

module.exports=contact;