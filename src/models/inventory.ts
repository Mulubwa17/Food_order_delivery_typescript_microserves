// inventory.model.ts
import { Schema, model, Types } from "mongoose";
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
