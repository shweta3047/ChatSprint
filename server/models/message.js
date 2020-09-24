const mongoose=require('mongoose');
const {ObjectId}=mongoose.Schema.Types;

const messageSchema=new mongoose.Schema({
    message:{
        type:String
    },
    messageType:{
        type:String
    },
    senderId:{
        type:ObjectId,
        ref:"User"
    },
    receiverId:{
        type:ObjectId,
        ref:"User"
    }
},{timestamps:true})

module.exports=mongoose.model("Message",messageSchema);