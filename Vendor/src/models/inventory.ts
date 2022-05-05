// inventory.model.ts
import { Schema, model, Types } from "mongoose";
import { createNewInventory, updateInventoryDetails } from "../controllers/inventory.types";
import { Vendor } from "./vendor";

// Create the interface
interface IInventory {
  vendorId: Types.ObjectId;
  category: String;
  description: String;
  items: [
    {
      name: String;
      quantity: Number;
    }
  ];
}

// Create the schema
const InventorySchema = new Schema<IInventory>(
  {
    vendorId: {
      type: Schema.Types.ObjectId,
      ref: Vendor,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    items: [
      {
        name: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

// Create and export inventory model
export const Inventory = model<IInventory>("Inventory", InventorySchema);

export const insertInventory =async (params:createNewInventory) => {
  const newInventory = new Inventory({ ...params});
  return  newInventory.save();
 } 

export const getInventoryByCategory= async(category:string):Promise<IInventory>=>{
  
 return Inventory.findOne({category}) as any;
  
}

export const getInventoryById= async(id:string):Promise<IInventory>=>{
  
 return Inventory.findOne({id}) as any;
  
}

export const getAllInventorys= async() => {
  return Inventory.find({}) as any;
}

export const updateInventory = async (id: string,params:updateInventoryDetails):Promise<IInventory> => {
  return Inventory.findOneAndUpdate({ id }, { ...params }, { new: true }) as any;
}

export const deleteInventory = async (id: string):Promise<IInventory> => {
  return Inventory.findOneAndDelete({ id }) as any;
}