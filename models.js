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

var auctionSchema=new mongoose.Schema({
    
        project_name:{type:String},
        auction: [{
            user_address:{type:String},
            user_bid:{type:String},
        }]
    
}); 


var User=mongoose.model('User',userSchema);
var Auction = mongoose.model('Auction',auctionSchema);

module.exports.User=User;
module.exports.Auction = Auction;
