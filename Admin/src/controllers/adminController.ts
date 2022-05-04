import { Request, Response, NextFunction } from "express";
import { nextTick } from "process";
import { Admin } from "../models/admin";

export const createAdmin = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, contact } = req.body;
    const admin = await Admin.findOne({ email });
    if (admin) {
      return res.status(404).json({ error: "Admin already exists!" });
    }
    const newAdmin = new Admin({ firstName, lastName, email, contact });

    await newAdmin.save();
    res.status(200).json({ data: newAdmin, message: "Admin created" });
    console.log(newAdmin);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "something went wrong" });
  }
};

export const getAdmins = async (req: Request, res: Response) => {
  const admins = await Admin.find({})
  
  res.status(200).send(admins);
}

export const getAdmin = async ( req: Request, res: Response, next:NextFunction) => {
  try {
    const id = req.params._id;
    const admin = await Admin.findOne({ id });

    if (!Admin) {
      res.status(404).send({ message: "Admin not found" });
    }
    res.status(200).send({ data: admin });

  } catch (error) {
   next(error);
}
}

export const updateAdmin = async (req: Request, res: Response) => {
  try {
    const admin = Admin.findOneAndUpdate({ id: req.params._id }, req.body, { new: true }, (err, admin) => {
      if (err) {
        res.status(404).send({ message: "Admin not found" });
      }
      res.status(200).send({ data: admin });
    })
  } catch (error) {
    res.status(500).send({ message: "Something went wrong,try again" })
  }
}

export const deleteAdmin = async (req: Request, res: Response) => {
  try {
    const admin = await Admin.deleteOne({ id: req.params._id })
    if (!admin) {
      res.status(404).send({ message: "Admin not found" });
    }
    res.status(200).send({ data: admin, message: "Admin successfully deleted!" });


  } catch (error) {
    res.status(500).send({ message: "Something went wrong,try again" })
  }
}