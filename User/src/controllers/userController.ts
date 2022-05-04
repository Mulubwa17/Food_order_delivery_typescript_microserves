import { Request, Response, NextFunction } from "express";
import { User } from "../models/user";
import * as redis from 'redis';



export const createUser = async (req: Request, res: Response) => {
    try {
        const { firstName, lastName, email, contact, password, address } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(404).send({ error: "User already exists!" });
        }
        const newUser = new User({ firstName, lastName, email, contact, password, address });

        await newUser.save();
        res.status(200).send({ data: newUser, message: "User created" });
        console.log(newUser);
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "something went wrong" });
    }
};

export const getUsers = async (req: Request, res: Response) => {
    const users = await User.find({})

    res.status(200).send(users);
}

export const getUser = async (id: string, req: Request, res: Response) => {
    try {

        const user = await User.findOne({ _id: id })

    

        if (!user) {
            res.status(404).send({ message: "User not found" });
        }
        res.status(200).send({ data: user });

    } catch (error) {
        res.status(500).send({ message: "Something went wrong,try again" })
    }
}

export const updateUser = async (req: Request, res: Response) => {
    try {
        const user = User.findOneAndUpdate({ id: req.params._id }, req.body, { new: true }, (err, user) => {
            if (err) {
                res.status(404).send({ message: "User not found" });
            }
            res.status(200).send({ data: user });
        })
    } catch (error) {
        res.status(500).send({ message: "Something went wrong,try again" })
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const user = await User.deleteOne({ id: req.params._id })
        if (!user) {
            res.status(404).send({ message: "User not found" });
        }
        res.status(200).send({ data: user, message: "User successfully deleted!" });


    } catch (error) {
        res.status(500).send({ message: "Something went wrong,try again" })
    }
}
