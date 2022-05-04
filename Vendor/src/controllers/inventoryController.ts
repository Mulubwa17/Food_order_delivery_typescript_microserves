import { Request, Response, NextFunction } from "express";
import { Inventory } from "../models/inventory";


export const createInventory = async (req: Request, res: Response) => {
  try {
    const { vendorId, category, description, items = {
      name: req.body.name,
      quantity: req.body.quantity,
    } } = req.body;

    const newInventory = new Inventory({
      vendorId,
      category,
      description,
      items,
    });

    await newInventory.save();
    res.status(200).send({ data: newInventory, message: "Inventory created" });
    console.log(newInventory);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "something went wrong" });
  }
};

export const getInventorys = async (req: Request, res: Response) => {
  const inventorys = await Inventory.find({}).populate("vendorId");

  res.status(200).send(inventorys);
};

export const getInventory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params._id;
    const inventory = await Inventory.findOne({ id });

   
    if (!inventory) {
      res.status(404).send({ message: "Inventory not found" });
    }
    res.status(200).send({ data: inventory });
  } catch (error) {
    next(error);
  }
};

export const updateInventory = async (req: Request, res: Response) => {
  try {
    const inventory = Inventory.findOneAndUpdate(
      { id: req.params._id },
      req.body,
      { new: true },
      (err, inventory) => {
        if (err) {
          res.status(404).send({ message: "Inventory not found" });
        }
        res.status(200).send({ data: inventory });
      }
    );
  } catch (error) {
    res.status(500).send({ message: "Something went wrong,try again" });
  }
};

export const deleteInventory = async (req: Request, res: Response) => {
  try {
    const inventory = await Inventory.deleteOne({ id: req.params._id });
    if (!inventory) {
      res.status(404).send({ message: "Inventory not found" });
    }
    res
      .status(200)
      .send({ data: inventory, message: "Inventory successfully deleted!" });
  } catch (error) {
    res.status(500).send({ message: "Something went wrong,try again" });
  }
};
