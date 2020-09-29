const express=require('express');
const router=express.Router();
const User=require('../../models/user');
const PersonalChat=require('../../models/personalChat');
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

router.put('/addUser',isLogin,(req,res)=>{
    const receiverId=req.body.receiverId;
    const senderId=req.user._id;
    User.findByIdAndUpdate(req.user._id,{$push:{savedUsers:receiverId}},{new:true})
    .select('-password')
    .then(updatedUser=>{
        PersonalChat.findOne({$and:[{members:{$in:[receiverId]}},{members:{$in:[senderId]}}]})
        .then(dm=>{
            if(!dm){
                const newDm=new PersonalChat({
                    members:[senderId,receiverId]
                })
                newDm.save()
                .then(updatedDm=>{
                    return res.json({updatedUser,updatedDm})
                }).catch(err=>console.log(err))
            }
            else
            return res.json({updatedUser,dm})
        }).catch(err=>console.log(err))
        
    }).catch(err=>console.log(err))
})



module.exports=router;