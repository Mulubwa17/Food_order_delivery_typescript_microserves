import { Request, Response, NextFunction } from "express";
import { Vendor } from "../models/vendor";


export const createVendor = async (req: Request, res: Response) => {
  try {
    const { name, proprietor, email, contact, password, address } = req.body;
    const vendor = await Vendor.findOne({ email });
    if (vendor) {
      return res.status(404).send({ error: "Vendor already exists!" });
    }
    const newVendor = new Vendor({
      name,
      proprietor,
      email,
      contact,
      password,
      address,
    });

    await newVendor.save();
    res.status(200).send({ data: newVendor, message: "Vendor created" });
    console.log(newVendor);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "something went wrong" });
  }
};

export const getVendors = async (req: Request, res: Response) => {
  const vendors = await Vendor.find({});

  res.status(200).send(vendors);
};

export const getVendor = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const id = req.params._id;
    const vendor = await Vendor.findOne({ id });

   
    if (!vendor) {
      res.status(404).send({ message: "Vendor not found" });
    }
    res.status(200).send({ data: vendor });
  } catch (error) {
    next(error);
  }
};

export const updateVendor = async (req: Request, res: Response) => {
  try {
    const vendor = Vendor.findOneAndUpdate(
      { id: req.params._id },
      req.body,
      { new: true },
      (err, vendor) => {
        if (err) {
          res.status(404).send({ message: "Vendor not found" });
        }
        res.status(200).send({ data: vendor });
      }
    );
  } catch (error) {
    res.status(500).send({ message: "Something went wrong,try again" });
  }
};

export const deleteVendor = async (req: Request, res: Response) => {
  try {
    const vendor = await Vendor.deleteOne({ id: req.params._id });
    if (!Vendor) {
      res.status(404).send({ message: "Vendor not found" });
    }
    res
      .status(200)
      .send({ data: vendor, message: "Vendor successfully deleted!" });
  } catch (error) {
    res.status(500).send({ message: "Something went wrong,try again" });
  }
};
