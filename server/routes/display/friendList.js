const express=require('express');
const router=express.Router();
const isLogin=require('../../middlewares/auth');
const User = require('../../models/user');

router.get("/showFriends",isLogin,(req,res)=>{
    try{
        User.findById(req.user._id)
        .populate('savedUsers','fullname username dp')
        .select('-password')
        .then(user=>{
            if(!user){
               return res.status(422).json({error:"User not found!!"})
            }
           return res.json({user})
        })

    }catch(err){
        throw err;
    }
})



module.exports=router;