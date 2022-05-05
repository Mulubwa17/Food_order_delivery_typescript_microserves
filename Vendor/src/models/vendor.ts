// vendor.model.ts
import { Schema, model } from "mongoose";
import { createNewVendor, updateVendorDetails } from "../controllers/vendor.types";

// Create the interface
interface IVendor {
  name: string;
  proprietor: string;
  email: string;
  password: string;
  address: string;
  contact: string;
  isActive: boolean;
}

// Create the schema
const VendorSchema = new Schema<IVendor>(
  {
    name: {
      type: String,
      required: true,
    },
    proprietor: {
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

// Create and export vendor model
export const Vendor = model<IVendor>("Vendor", VendorSchema);

export const insertVendor =async (params:createNewVendor) => {
  const newVendor = new Vendor({ ...params});
  return  newVendor.save();
 } 

export const getVendorByEmail= async(email:string):Promise<IVendor>=>{
  
 return Vendor.findOne({email}) as any;
  
}

export const getVendorById= async(id:string):Promise<IVendor>=>{
  
 return Vendor.findOne({id}) as any;
  
}

export const getAllVendors= async() => {
  return Vendor.find({}) as any;
}

export const updateVendor = async (id: string,params:updateVendorDetails):Promise<IVendor> => {
  return Vendor.findOneAndUpdate({ id }, { ...params }, { new: true }) as any;
}

export const deleteVendor = async (id: string):Promise<IVendor> => {
  return Vendor.findOneAndDelete({ id }) as any;
}