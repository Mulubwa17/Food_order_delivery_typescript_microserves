// admin.model.ts
import { Schema, model } from "mongoose";
import { NewAdminParams } from "../controllers/admin/types";

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

export const getAdminsByEmail= async(email:string):Promise<IAdmin>=>{
   return Admin.findOne({email})
}

export const insertAdmin =async (params:NewAdminParams) => {
  const newAdmin = new Admin({ ...params});
  return  newAdmin.save();
}