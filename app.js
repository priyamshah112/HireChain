const express=require('express');
const mongoose=require('mongoose');
const bparser=require('body-parser');
var User=require('./models').User;
var IPFS = require('ipfs-http-client');
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
    // user.save((err)=>{
    //     if(err){
    //         console.log(err);
    //     }
    // });


    res.json({reply:"success"});



});
app.get("/api/v1/user/:id",(req,res)=>{
    User.findOne({publicKey:req.params.id}).then((data)=>{
        res.json(data);
    });
    
});

app.listen(5000,()=>{
    console.log("listening to port 5000");
})