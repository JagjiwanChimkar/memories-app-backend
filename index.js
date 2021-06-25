import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import PostRouter from './routes/posts.js';

import dotenv from 'dotenv';

dotenv.config();

var app=express();


app.use(bodyParser.json({limit: "30mb",extended:true}))
app.use(bodyParser.urlencoded({limit: "30mb",extended:true}))
app.use(cors());

app.use('/posts',PostRouter);


const PORT=process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser: true,useUnifiedTopology: true})
  .then(()=> {app.listen(PORT,()=>console.log("Server is Running"))})
  .catch(error=>console.log(error.message));

mongoose.set('useFindAndModify',false);


