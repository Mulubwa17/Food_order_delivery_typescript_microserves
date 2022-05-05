// driver.model.ts
import { Schema, model } from 'mongoose';
import { createNewDriver, updateDriverDetails } from '../controllers/driver.types';

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

export const insertDriver =async (params:createNewDriver) => {
  const newDriver = new Driver({ ...params});
  return  newDriver.save();
 } 

export const getDriverByContact= async(contact:string):Promise<IDriver>=>{
  
 return Driver.findOne({contact}) as any;
  
}

export const getDriverById= async(id:string):Promise<IDriver>=>{
  
 return Driver.findOne({id}) as any;
  
}

export const getAllDrivers= async() => {
  return Driver.find({}) as any;
}

export const updateDriver = async (id: string, params:updateDriverDetails):Promise<IDriver> => {
  return Driver.findOneAndUpdate({ id }, { ...params }, { new: true }) as any;
}

export const deleteDriver = async (id: string):Promise<IDriver> => {
  return Driver.findOneAndDelete({ id }) as any;
}