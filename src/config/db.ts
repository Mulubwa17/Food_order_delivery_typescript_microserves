import dotenv from 'dotenv';
import mongoose from "mongoose";
dotenv.config();

const uriA: string = 'mongodb://localhost:27017/admin_control';

export const adminDB = () => {
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
    mongoose.connect(uriC, (err: any) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log("Customer DB Successfully Connected!");
      }
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