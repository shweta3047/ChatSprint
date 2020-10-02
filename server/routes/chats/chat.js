const express=require('express');
const router=express.Router();
const User=require('../../models/user');
const PersonalChat=require('../../models/personalChat');
const Message=require('../../models/message')
const isLogin=require('../../middlewares/auth');

router.get('/messages/all',isLogin,(req,res)=>{
    PersonalChat.find({members:{$all:[req.user._id]}})
    .populate('members','_id username dp fullname')
    .populate('chats')
    .then(chats=>{
        return res.json({chats})
    }).catch(err=>console.log(err))
})

module.exports=router;