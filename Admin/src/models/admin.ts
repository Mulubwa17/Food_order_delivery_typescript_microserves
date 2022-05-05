// admin.model.ts
import { Schema, model } from "mongoose";
import { createNewAdmin, updateAdminDetails } from "../controllers/admin.types";

// Create the interface
interface IAdmin {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  contact: string;
  isActive: boolean;
}

// Create the schema
const AdminSchema = new Schema<IAdmin>(
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

// Create and export admin model
export const Admin = model<IAdmin>("Admin", AdminSchema);

export const insertAdmin =async (params:createNewAdmin) => {
  const newAdmin = new Admin({ ...params});
  return  newAdmin.save();
 } 

export const getAdminByEmail= async(email:string):Promise<IAdmin>=>{
  
 return Admin.findOne({email}) as any;
  
}

export const getAdminById= async(id:string):Promise<IAdmin>=>{
  
 return Admin.findOne({id}) as any;
  
}

export const getAllAdmins= async() => {
  return Admin.find({}) as any;
}

export const updateAdmin = async (id: string, params:updateAdminDetails):Promise<IAdmin> => {
  return Admin.findOneAndUpdate({ id }, {...params}, { new: true }) as any;
}

export const deleteAdmin = async (id: string):Promise<IAdmin> => {
  return Admin.findOneAndDelete({ id }) as any;
}

