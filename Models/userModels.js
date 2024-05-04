import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    username:String,
    email:String,
    password:String,
    createdAt:Date
  });
  const Userr = mongoose.model('user', userSchema,"user");
  export default Userr