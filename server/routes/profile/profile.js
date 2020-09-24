const express=require('express');
const router=express.Router();
const User=require('../../models/user');
const isLogin=require('../../middlewares/auth');

router.get('/profile/:id',isLogin,(req,res)=>{
    User.findById(req.params.id)
    .select('_id username fullname dp bio')
    .then(user=>{
        if(!user){
            return res.status(422).json({error:"No user found!!"})
        }
        return res.json({user});
    }).catch(err=>console.log(err))
})





module.exports=router;