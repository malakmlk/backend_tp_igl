const express=require('express');
const app = express();
const mongoose=require('mongoose');
const cors=require('cors');

const bodyParser=require('body-parser');
require("dotenv/config");

app.use(cors());
app.use(bodyParser.json());
//middlewares

// imports routes
const noteRoute=require('./routes/noteroute');
app.use("/note",noteRoute);


const groupeRoute=require('./routes/grouperoute');
app.use("/groupe",groupeRoute);
//connect
mongoose.connect("mongodb://127.0.0.1:27017/bddIgl",{ useNewUrlParser: true ,useCreateIndex: true,useUnifiedTopology: true });
const connection= mongoose.connection;
connection.once('open',()=> {
   console.log("sucees");
})

//listen to server
app.listen(3000);