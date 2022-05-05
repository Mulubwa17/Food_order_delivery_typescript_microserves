// delivery.model.ts
import mongoose from 'mongoose';
import { Schema, model,Types } from 'mongoose';

import {Order} from './order';
import {Driver} from './driver';
import { createNewDelivery, updateDeliveryDetails } from '../controllers/delivery.types';

// Create the interface
interface IDelivery {
 orderId: Types.ObjectId,
 driverId: Types.ObjectId,
 delivered: Boolean,
 delayed: Boolean
  
}

// Create the schema
const DeliverySchema = new Schema<IDelivery>({
  orderId: {
    type: Schema.Types.ObjectId,
    ref: Order,
    required: true
  },
  driverId: {
    type: Schema.Types.ObjectId,
    ref: Driver,
    required: true
  },

  delivered: {
    type: Boolean,
    required: true
  },
delayed: {
        type: Boolean,
        default: false
    },
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: "updatedAt"
  }
});

// Create and export order model
export const Delivery = model<IDelivery>("Delivery", DeliverySchema);

export const insertDelivery =async (params:createNewDelivery) => {
  const newDelivery = new Delivery({ ...params});
  return  newDelivery.save();
 } 

export const getDeliveryByOrderId= async(orderId:string):Promise<IDelivery>=>{
  
 return Delivery.findOne({orderId}) as any;
  
}

export const getDeliveryById= async(id:string):Promise<IDelivery>=>{
  
 return Delivery.findOne({id}) as any;
  
}

export const getAllDeliverys= async() => {
  return Delivery.find({}) as any;
}

export const updateDelivery = async (id: string, params:updateDeliveryDetails):Promise<IDelivery> => {
  return Delivery.findOneAndUpdate({ id }, { ...params }, { new: true }) as any;
}

export const deleteDelivery = async (id: string):Promise<IDelivery> => {
  return Delivery.findOneAndDelete({ id }) as any;
}