import { Request, Response, NextFunction } from "express";
import { nextTick } from "process";
import { Admin, getAdmins, getAdminsByEmail, insertAdmin } from "../../models/admin";
import { NewAdminParams, NewAdminResponse, StatusCodes } from "./types";


export const createAdmin = async (newAdaminParams: NewAdminParams ):Promise<NewAdminResponse> => {
  try {
    const {email} = newAdaminParams
    const admins = await getAdminsByEmail(email)
    if (admins) {
      return { message:'Not found', status:StatusCodes.ERROR}
    }
    const newAdmin = await insertAdmin(newAdaminParams)
    return { message:'Created', status:StatusCodes.SUCESSS, data:newAdmin}
    console.log(newAdmin);
  } catch (error) {
    console.log(error);
    return { message:'Something went wrong ', status:StatusCodes.ERROR}
  }
};

export const getAdmins = async (req: Request, res: Response) => {
  const admins = await getAdminsByEmail()
  
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