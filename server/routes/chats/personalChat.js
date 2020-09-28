const express=require('express');
const router=express.Router();
const User=require('../../models/user');
const PersonalChat=require('../../models/personalChat');
const isLogin=require('../../middlewares/auth');

router.get('/messages/dm/:id',isLogin,(req,res)=>{
    const receiverId=req.params.id;
    const senderId=req.user._id;
    PersonalChat.find({members:{$in:{receiverId,senderId}}})
    .populate('members','_id username dp fullname')
    .populate('chats')
    .then(dm=>{
        if(!dm || dm.chats===[]){
            User.findOne({_id:senderId,savedUsers:{$in:{receiverId}}})
            .then(user=>{
                if(!user)
                    return res.status(422).json({error:"User not in friends list!"})
                else{
                    return res.json({dm,user})
                }
            })
        }
        return res.json({dm})
    })
})

module.exports=router;