import dotenv from 'dotenv';
import mongoose from "mongoose";
dotenv.config();

const MONGO_URI: string = 'mongodb://localhost:27017/admin_control';

export const adminDb = () => {
mongoose.connect(MONGO_URI, (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Admin DB Successfully Connected!");
  }
});
}

