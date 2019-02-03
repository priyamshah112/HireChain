const express=require('express');
const mongoose=require('mongoose');
const bparser=require('body-parser');
var User=require('./models').User;
var Auction = require('./models').Auction;
var IPFS = require('ipfs-http-client');
// var Selection = require('./models').Selection;
// db connect

// const ipfs = new IPFS({host: "ipfs.infura.io", port: 5001, protocol: "https" });

mongoose.connect("mongodb://hirechain:hirechain1@ds119085.mlab.com:19085/hirechain");

// var first=User({name:'devash'}).save((err)=>{
//     console.log(err);
// });





const app=express();
app.use(bparser.json());
app.use(bparser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    console.log("wroking");
});
app.post("/api/v1/add",(req,res)=>{
    console.log(req.body);

    var user=new User({
        name:req.body.name,
        address:req.body.address,
        link:req.body.link,
        
        email:req.body.email,
        number:req.body.number,
    
        publicKey:req.body.publicKey
    
    });
    user.save((err)=>{
        if(err){
            console.log(err);
        }
    });


    res.json({reply:"success"});



});
app.get("/api/v1/user/:id",(req,res)=>{
    User.findOne({publicKey:req.params.id}).then((data)=>{
        res.json(data);
    });
    
});

app.post("/api/v1/project",(req,res)=>{
    var projectname=req.body.pname;
    var auction=new Auction({
            
            project_name:req.body.pname,
            auction:[]
            
      });
    auction.save((err)=>{
        if(err){
            console.log(err);
        }
    })   
});

app.get("/api/v1/auctions/:id",(req,res)=>{
    User.findOne({pname:req.params.id}).then((data)=>{
        res.json(data);
    });
    
});

app.post("/api/v1/auction",(req,res)=>{
    console.log(req.body);
    var project_name=req.body.pname;
    var user_addr=req.body.useraddr;
    var bid=req.body.bid;
    Auction.findByIdAndUpdate({project_name:pname},{$push:{auction:{user_addr:user_addr,user_bid:bid}}}).then((data)=>{
            console.log(data);
    });
    // user.save((err)=>{
    //     if(err){
    //         console.log(err);
    //     }
    // });


    res.json({reply:"success"});



});

app.listen(5000,()=>{
    console.log("listening to port 5000");
})

