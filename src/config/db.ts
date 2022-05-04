import dotenv from 'dotenv';
import mongoose from "mongoose";
dotenv.config();

const MONGO_DB_URI: string = 'mongodb://localhost:27017/admin_control';

export const adminDb = () => {
mongoose.connect(uriA, (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Admin DB Successfully Connected!");
  }
});
}

const uriC: string = 'mongodb://localhost:27017/customer';

export const customerDB = () => {
    mongoose.connect(uriC, (error: any) => {
      if (error) {
        console.log(err.message);
      } else {
        console.log("Customer DB Successfully Connected!");
      }

      if(error) return console.log()

     console.log(sucesss)
    });
    }

const uriV: string = 'mongodb://localhost:27017/vendor';
 export const vendorDB = () => {
        mongoose.connect(uriV, (err: any) => {
          if (err) {
            console.log(err.message);
          } else {
            console.log("Vendor DB Successfully Connected!");
          }
        });
        }