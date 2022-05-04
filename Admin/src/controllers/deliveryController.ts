import { Request, Response, NextFunction } from "express";
import { Delivery } from "../models/delivery";
import * as redis from "redis";

const client = redis.createClient({
  url: "redis://127.0.0.1:6379",
  legacyMode: true,
});

export const createDelivery = async (req: Request, res: Response) => {
  try {
    const { orderId,
      driverId,
      delivered,
      delayed } = req.body;

    const newDelivery = new Delivery({
      orderId,
      driverId,
      delivered,
      delayed,

    });

    await newDelivery.save();
    res.status(200).send({ data: newDelivery, message: "Delivery created" });
    console.log(newDelivery);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "something went wrong" });
  }
};

export const getDeliverys = async (req: Request, res: Response) => {
  const deliverys = await Delivery.find({}).populate("orderId").populate("driverId");
client.setEx('deliverys', 1440, JSON.stringify(deliverys));
  res.status(200).send(deliverys);
};

export const getDelivery = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params._id;
    const delivery = await Delivery.findOne({ id });

    client.setEx(id, 1440, JSON.stringify(delivery));
    if (!Delivery) {
      res.status(404).send({ message: "Delivery not found" });
    }
    res.status(200).send({ data: delivery });
  } catch (error) {
    next(error);
  }
};

export const updateDelivery = async (req: Request, res: Response) => {
  try {
    const delivery = Delivery.findOneAndUpdate(
      { id: req.params._id },
      req.body,
      { new: true },
      (err, delivery) => {
        if (err) {
          res.status(404).send({ message: "Delivery not found" });
        }
        res.status(200).send({ data: delivery });
      }
    );
  } catch (error) {
    res.status(500).send({ message: "Something went wrong,try again" });
  }
};

export const deleteDelivery = async (req: Request, res: Response) => {
  try {
    const delivery = await Delivery.deleteOne({ id: req.params._id });
    if (!delivery) {
      res.status(404).send({ message: "Delivery not found" });
    }
    res
      .status(200)
      .send({ data: delivery, message: "Delivery successfully deleted!" });
  } catch (error) {
    res.status(500).send({ message: "Something went wrong,try again" });
  }
};
