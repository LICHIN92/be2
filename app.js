import express from 'express'
import mongoose from 'mongoose';
import 'dotenv/config'
import userRouter from './Router/userRouter.js';
const port = process.env.PORT
const app = new express();

async function main() {
  // console.log(process.env.MONGODB_URL);
  // await mongoose.connect('mongodb+srv://lichinc1992:r8Ity1wjKtyT9CD1@cluster0.toj3yfo.mongodb.net/');
  await mongoose.connect(process.env.MONGODB_URL)
  console.log('Connected to MongoDB');
}
main().then(res => console.log('conected to db')).catch(err => console.log(err));
app.use('/', userRouter)
app.listen(port,() => {
  console.log(port);
  console.log(`running at ${port}`);
})