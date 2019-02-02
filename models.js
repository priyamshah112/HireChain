var mongoose=require('mongoose');


var userSchema=new mongoose.Schema({
    name:{type:String},
    address:{type:String},
    link:{type:String},
    extra:{type:String},
    email:{type:String},
    number:{type:String},
    username:{type:String},
    publicKey:{type:String}
}); 

var User=mongoose.model('User',userSchema);

module.exports.User=User;
