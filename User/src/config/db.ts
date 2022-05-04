import dotenv from 'dotenv';
import mongoose from "mongoose";
dotenv.config();


const MONGO_URI: string = process.env.MONGO_URI || '';

export const customerDb = () => {
    mongoose.connect(MONGO_URI, (err: any) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log("Customer DB Successfully Connected!");
      }
    });
    }

