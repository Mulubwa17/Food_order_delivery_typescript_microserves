// vendor.model.ts
import { Schema, model } from "mongoose";

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
