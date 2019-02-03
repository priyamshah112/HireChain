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
    // console.log(req.params.id2)
    ;
    var projectname=req.body.pname;
    var owner=req.body.own;
    // console.log(projectname);
    // console.log(req.params.id);
    var auction=new Auction({
            owner:owner,
            finaladdr: "",
            finalbid: "",
            project_name:projectname,
            auction:[]
            
      });
    auction.save((err)=>{
        if(err){
            console.log(err);
        }
    })
    // res.json({result:"success"});   
});

app.get("/api/v1/auction/:id",(req,res)=>{
    Auction.findOne({project_name:req.params.id}).then((data)=>{
        res.json(data);
    });

    
});
app.post("/api/v1/accept",(req,res)=>{
    var addr=req.body.publickey;
    var bid=req.body.bid;
    var projectname=req.body.name;
    console.log(req.body)
    Auction.findOneAndUpdate({project_name:projectname},{$set:{finaladdr:addr,finalbid:bid}}).then((data)=>{
        console.log(data);
    });
    res.json({status:"done"});
    

});

app.post("/api/v1/auction/",(req,res)=>{
    console.log(req.body);



    var project_name=req.body.pname;
    var user_addr=req.body.useraddr;
    console.log(user_addr);
    var bid=req.body.bid;
    Auction.findOneAndUpdate({project_name:project_name},{$push:{auction:{user_address:user_addr,user_bid:bid,status:'not-done'}}}).then((data)=>{
            console.log(data);
    });

    res.json({reply:"success"});



});

app.listen(5000,()=>{
    console.log("listening to port 5000");
})

