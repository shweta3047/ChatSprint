const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');

const PORT=3001;
const {MONGOURI}=require('./config/keys');
const loginRoute=require('./routes/auth/login');
const signupRoute=require('./routes/auth/signup');
const globalSearchRoute=require('./routes/search/globalSearch');
const friendSearchRoute=require('./routes/search/localSearch');

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
app.use(globalSearchRoute);
app.use(friendSearchRoute);


app.listen(PORT,()=>{
    console.log("server is listening at PORT "+PORT);
})