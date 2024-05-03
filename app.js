import express from 'express'
import mongoose from 'mongoose';
import 'dotenv/config'
const port=3000
const app=new express();

async function main() {
    // console.log(process.env.MONGODB_URL);
    // await mongoose.connect('mongodb+srv://lichinc1992:r8Ity1wjKtyT9CD1@cluster0.toj3yfo.mongodb.net/');
    await mongoose.connect(process.env.MONGODB_URL)
    console.log('Connected to MongoDB');
  }
  main().then(res => console.log('conected to db')).catch(err => console.log(err));
  app.use('/',(req,res)=>{
    res.send("hello lichin")
  })
app.listen(()=>{
    console.log(`running at ${port}`);
})