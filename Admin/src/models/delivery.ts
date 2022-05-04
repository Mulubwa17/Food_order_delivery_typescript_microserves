// delivery.model.ts
import mongoose from 'mongoose';
import { Schema, model,Types } from 'mongoose';

import {Order} from './order';
import {Driver} from './driver';

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