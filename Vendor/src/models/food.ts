// food.model.ts
import { Schema, model, Types } from "mongoose";
import { createNewFood, updateFoodDetails } from "../controllers/food.types";
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

export const insertFood =async (params:createNewFood) => {
  const newFood = new Food({ ...params});
  return  newFood.save();
 } 

export const getFoodByEmail= async(name:string):Promise<IFood>=>{
  
 return Food.findOne({name}) as any;
  
}

export const getFoodById= async(id:string):Promise<IFood>=>{
  
 return Food.findOne({id}) as any;
  
}

export const getAllFoods= async() => {
  return Food.find({}) as any;
}

export const updateFood = async (id: string,params:updateFoodDetails):Promise<IFood> => {
  return Food.findOneAndUpdate({ id }, { ...params }, { new: true }) as any;
}

export const deleteFood = async (id: string):Promise<IFood> => {
  return Food.findOneAndDelete({ id }) as any;
}