// food.model.ts
import { Schema, model, Types } from "mongoose";
import { Vendor } from "./vendor";

// Create the interface
interface IFood {
  name: string;
  description: string;
  category: string;
  rating: number;
  price: number;
  vendorId: Types.ObjectId;
}

// Create the schema
const FoodSchema = new Schema<IFood>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    vendorId: {
      type: Schema.Types.ObjectId,
      ref: Vendor,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

// Create and export food model
export const Food = model<IFood>("Food", FoodSchema);
