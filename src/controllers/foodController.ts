import { Request, Response, NextFunction } from "express";
import * as redis from "redis";
import { Food } from "../models/food";

const client = redis.createClient({
  url: "redis://127.0.0.1:6379",
  legacyMode: true,
});

export const createFood = async (req: Request, res: Response) => {
  try {
    const { name, description, category, rating, price,vendorId } = req.body;
  
    const newFood = new Food({
      name,
      description,
      category,
      rating,
      price,
      vendorId,
    });

    await newFood.save();
    res.status(200).send({ data: newFood, message: "Food created" });
    console.log(newFood);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "something went wrong" });
  }
};

export const getFoods = async (req: Request, res: Response) => {
  const foods = await Food.find({}).populate("vendorId");
client.setEx('foods', 1440, JSON.stringify(foods));
  res.status(200).send(foods);
};

export const getFood = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const id = req.params._id;
    const food = await Food.findOne({ id });

    client.setEx(id, 1440, JSON.stringify(food));
    if (!food) {
      res.status(404).send({ message: "Food not found" });
    }
    res.status(200).send({ data: food });
  } catch (error) {
    next(error);
  }
};

export const updateFood = async (req: Request, res: Response) => {
  try {
    const food = Food.findOneAndUpdate(
      { id: req.params._id },
      req.body,
      { new: true },
      (err, food) => {
        if (err) {
          res.status(404).send({ message: "Food not found" });
        }
        res.status(200).send({ data: food });
      }
    );
  } catch (error) {
    res.status(500).send({ message: "Something went wrong,try again" });
  }
};

export const deleteFood = async (req: Request, res: Response) => {
  try {
    const food = await Food.deleteOne({ id: req.params._id });
    if (!food) {
      res.status(404).send({ message: "Food not found" });
    }
    res
      .status(200)
      .send({ data: food, message: "Food successfully deleted!" });
  } catch (error) {
    res.status(500).send({ message: "Something went wrong,try again" });
  }
};
