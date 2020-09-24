const mongoose=require('mongoose');
const {ObjectId}=mongoose.Schema.Types;

const personalChatSchema=new mongoose.Schema({
    members:[
        {
            type:ObjectId,
            ref:"User"
        }
    ],
    messages:[
        {
            type:ObjectId,
            ref:"Message"
        }
    ]
})

module.exports=mongoose.model("PersonalChat",personalChatSchema)