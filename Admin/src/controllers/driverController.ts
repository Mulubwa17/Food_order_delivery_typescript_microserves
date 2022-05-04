import { Request, Response, NextFunction } from "express";
import { Driver } from "../models/driver";
import * as redis from 'redis';



export const createDriver = async (req: Request, res: Response) => {
    try {
        const { firstName, lastName, email, contact, password, address } = req.body;
        const driver = await Driver.findOne({ email });
        if (driver) {
            return res.status(404).send({ error: "Driver already exists!" });
        }
        const newDriver = new Driver({ firstName, lastName, email, contact, password, address });

        await newDriver.save();
        res.status(200).send({ data: newDriver, message: "Driver created" });
        console.log(newDriver);
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "something went wrong" });
    }
};

export const getDrivers = async (req: Request, res: Response) => {
    const drivers = await Driver.find({})

    res.status(200).send(drivers);
}

export const getDriver = async (id: string, req: Request, res: Response) => {
    try {

        const driver = await Driver.findOne({ _id: id })

        
        if (!driver) {
            res.status(404).send({ message: "Driver not found" });
        }
        res.status(200).send({ data: driver });

    } catch (error) {
        res.status(500).send({ message: "Something went wrong,try again" })
    }
}

export const updateDriver = async (req: Request, res: Response) => {
    try {
        const driver = Driver.findOneAndUpdate({ id: req.params._id }, req.body, { new: true }, (err, Driver) => {
            if (err) {
                res.status(404).send({ message: "Driver not found" });
            }
            res.status(200).send({ data: driver });
        })
    } catch (error) {
        res.status(500).send({ message: "Something went wrong,try again" })
    }
}

export const deleteDriver = async (req: Request, res: Response) => {
    try {
        const driver = await Driver.deleteOne({ id: req.params._id })
        if (!driver) {
            res.status(404).send({ message: "Driver not found" });
        }
        res.status(200).send({ data: driver, message: "Driver successfully deleted!" });


    } catch (error) {
        res.status(500).send({ message: "Something went wrong,try again" })
    }
}
