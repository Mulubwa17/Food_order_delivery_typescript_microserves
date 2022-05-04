import { Request, Response, NextFunction } from "express";
import { Order } from "../models/order";
import { createNewOrder } from "../queues/order-queue";
import { User } from "../../../User/src/models/user";
import { Food } from "../../../Vendor/src/models/food";
import { client } from "../config/redis";



export const createOrder = async (req: Request, res: Response) => {
  try {
    const {  
      foodId,
      customerId,
      orderTime,
      deliveryTime,
      paid,
      destinationAddress,
      orderReady } = req.body;
   
    const newOrder = new Order({
      foodId,
      customerId,
      orderTime,
      deliveryTime,
      paid,
      destinationAddress,
      orderReady,

    });

    await newOrder.save();

    await createNewOrder(newOrder);
    res.status(200).send({ data: newOrder, message: "Order created" });
    console.log(newOrder);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "something went wrong" });
  }
};

export const getOrders = async (req: Request, res: Response) => {
  const orders = await Order.find({}).populate({ path: 'customerId', model: User }).populate({ path: 'foodId', model: Food });
client.setEx('orders', 1440, JSON.stringify(orders));
  res.status(200).send(orders);
};

export const getOrder = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const id = req.params._id;
    const order = await Order.findOne({ id });

    client.setEx(id, 1440, JSON.stringify(order));

    if (!order) {
      res.status(404).send({ message: "Order not found" });
    }
    res.status(200).send({ data: order });
  } catch (error) {
    next(error);
  }
};

export const updateOrder = async (req: Request, res: Response) => {
  try {
    const order = Order.findOneAndUpdate(
      { id: req.params._id },
      req.body,
      { new: true },
      (err, order) => {
        if (err) {
          res.status(404).send({ message: "Order not found" });
        }
        res.status(200).send({ data: order });
      }
    );
  } catch (error) {
    res.status(500).send({ message: "Something went wrong,try again" });
  }
};

export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const order = await Order.deleteOne({ id: req.params._id });
    if (!order) {
      res.status(404).send({ message: "Order not found" });
    }
    res
      .status(200)
      .send({ data: order, message: "Order successfully deleted!" });
  } catch (error) {
    res.status(500).send({ message: "Something went wrong,try again" });
  }
};
