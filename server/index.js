const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');

const PORT=3001;
const {MONGOURI}=require('./config/keys');
const loginRoute=require('./routes/auth/login');
const signupRoute=require('./routes/auth/signup');
const searchRoute=require('./routes/search/search');
const profileRoute=require('./routes/profile/profile')
const chatsRoute=require('./routes/chats/chat');
const friendListRoute=require('./routes/display/friendList');
const personalChat=require('./routes/chats/personalChat')

mongoose.connect(MONGOURI,{useNewUrlParser:true,useUnifiedTopology:true});
mongoose.connection.on("connected",()=>{
    console.log("Database connected succesfully");
});
mongoose.connection.on("error",(err)=>{
    console.log("Error in connecting to database "+err)
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());
app.use(cors());

app.use(loginRoute);
app.use(signupRoute);
app.use(searchRoute);
app.use(profileRoute);
app.use(personalChat);
app.use(chatsRoute);
app.use(friendListRoute)

app.listen(PORT,()=>{
    console.log("server is listening at PORT "+PORT);
})