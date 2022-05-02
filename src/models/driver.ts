// driver.model.ts
import { Schema, model } from 'mongoose';

// Create the interface
interface IDriver {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  driverUniqueId: String,
  address: string;
  contact: string,
  isActive: boolean,
  available: boolean
  
}

// Create the schema
const DriverSchema = new Schema<IDriver>({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  driverUniqueId: {
    type: String,
    required: true
    },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
    },
    contact: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: false
    },
    available: {
        type: Boolean,
        default: false
    },
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: "updatedAt"
  }
});

// Create and export driver model
export const Driver = model<IDriver>("Driver", DriverSchema);