import express, { Request, Response, NextFunction } from 'express';
import { createNewUser, createNewUserResponse, messages } from "../controllers/user.types";
import { createUser, deleteUserProfile, getUserProfile, getUsers, updateUserProfile } from '../controllers/userController';
// import { isCached, isCached1 } from '../middlewares/cache';

const router = express.Router();

router.post('/new_user',async (req:Request, res:Response, next:NextFunction) => {
    try { 
     const response = await createUser(req.body);
     res.status(201).send(response)
    } catch (error:any) {
        res.status(400).send(error.message);
    }
} )

router.get('/view_users',async (req:Request, res:Response, next:NextFunction) => {
    try {
        const response = await getUsers();
        res.status(200).send(response)
    } catch (error:any) {
        res.status(400).send(error.message);
    }
} )

router.get('/view_user/:id',async (req:Request, res:Response, next:NextFunction) => {
    try {
        const response = await getUserProfile(req.params.id);
        res.status(200).send(response)
    } catch (error:any) {
        res.status(400).send(error.message);
    }
})

router.put('/edit_user/:id',async(req:Request, res:Response, next:NextFunction) => {
    try {
        const response = await updateUserProfile(req.params.id, req.body);
        res.status(200).send(response)
    } catch (error:any) {
        res.status(400).send(error.message);
    }
} )

router.delete('/remove_user/:id',async(req:Request, res:Response, next:NextFunction) => {
    try {
        const response = await deleteUserProfile(req.params.id);
        res.status(200).send(response)
    } catch (error:any) {
        res.status(400).send(error.message);
    }
} )

export { router as userRoute };