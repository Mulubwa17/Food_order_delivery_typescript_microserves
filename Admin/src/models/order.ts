// order.model.ts
import mongoose from 'mongoose';
import { Schema, model,Types } from 'mongoose';
import { createNewOrder, updateOrderDetails } from '../controllers/order.types';

const db2 = mongoose.createConnection('mongodb://localhost:27017/customer');

const UserSchema = new Schema({ numMessages: Number });
const User = db2.model('User', UserSchema);

const db1 = mongoose.createConnection('mongodb://localhost:27017/vendor');

const FoodSchema = new Schema({ numMessages: Number });
const Food = db2.model('Food', FoodSchema);

// Create the interface
interface IOrder {
 foodId: Types.ObjectId,
 customerId: Types.ObjectId,
 orderTime: String,
 deliveryTime:String,
 paid: Boolean,
 destinationAddress: String,
 orderReady: Boolean
  
}

// Create the schema
const OrderSchema = new Schema<IOrder>({
  foodId: {
    type: Schema.Types.ObjectId,
    ref: Food,
    required: true
  },
  customerId: {
    type: Schema.Types.ObjectId,
    ref: User,
    required: true
  },
  orderTime: {
    type: String,
    required: true
  },
  paid: {
    type: Boolean,
    required: true
  },
  deliveryTime: {
    type: String,
    required: true
    },
    destinationAddress: {
        type: String,
        required: true
    },
    orderReady: {
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
export const Order = model<IOrder>("Order", OrderSchema);

export const insertOrder =async (params:createNewOrder) => {
  const newOrder = new Order({ ...params});
  return  newOrder.save();
 } 

export const getOrderById= async(id:string):Promise<IOrder>=>{
  
 return Order.findOne({id}) as any;
  
}

export const getAllOrders= async() => {
  return Order.find({}) as any;
}

export const updateOrder = async (id: string,params:updateOrderDetails):Promise<IOrder> => {
  return Order.findOneAndUpdate({ id }, { ...params }, { new: true }) as any;
}

export const deleteOrder = async (id: string):Promise<IOrder> => {
  return Order.findOneAndDelete({ id }) as any;
}