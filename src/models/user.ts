// user.model.ts
import { Schema, model } from "mongoose";

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
