// user.model.ts
import { Schema, model } from "mongoose";
import { createNewUser, updateUserDetails } from "../controllers/user.types";

// Create the interface
interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: string;
  contact: string;
  isActive: boolean;
}

// Create the schema
const UserSchema = new Schema<IUser>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

// Create and export user model
export const User = model<IUser>("User", UserSchema);

export const insertUser =async (params:createNewUser) => {
  const newUser = new User({ ...params});
  return  newUser.save();
 } 

export const getUserByEmail= async(email:string):Promise<IUser>=>{
  
 return User.findOne({email}) as any;
  
}

export const getUserById= async(id:string):Promise<IUser>=>{
  
 return User.findOne({id}) as any;
  
}

export const getAllUsers= async() => {
  return User.find({}) as any;
}

export const updateUser = async (id: string,params:updateUserDetails):Promise<IUser> => {
  return User.findOneAndUpdate({ id }, { ...params }, { new: true }) as any;
}

export const deleteUser = async (id: string):Promise<IUser> => {
  return User.findOneAndDelete({ id }) as any;
}