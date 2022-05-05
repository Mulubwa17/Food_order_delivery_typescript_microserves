import express, { Request, Response, NextFunction } from 'express';
import { createAdmin, deleteAdminProfile, getAdminProfile, getAdmins, updateAdminProfile } from '../controllers/adminController';
// import { isCached, isCached1 } from '../middlewares/cache';

const router = express.Router();

router.post('/new_admin',async (req:Request, res:Response, next:NextFunction) => {
    try { 
     const response = await createAdmin(req.body);
     res.status(201).send(response)
    } catch (error:any) {
        res.status(400).send(error.message);
    }
} )

router.get('/view_admins',async (req:Request, res:Response, next:NextFunction) => {
    try {
        const response = await getAdmins();
        res.status(200).send(response)
    } catch (error:any) {
        res.status(400).send(error.message);
    }
} )

router.get('/view_admin/:id',async (req:Request, res:Response, next:NextFunction) => {
    try {
        const response = await getAdminProfile(req.params.id);
        res.status(200).send(response)
    } catch (error:any) {
        res.status(400).send(error.message);
    }
})

router.put('/edit_admin/:id',async(req:Request, res:Response, next:NextFunction) => {
    try {
        const response = await updateAdminProfile(req.params.id, req.body);
        res.status(200).send(response)
    } catch (error:any) {
        res.status(400).send(error.message);
    }
} )

router.delete('/remove_admin/:id',async(req:Request, res:Response, next:NextFunction) => {
    try {
        const response = await deleteAdminProfile(req.params.id);
        res.status(200).send(response)
    } catch (error:any) {
        res.status(400).send(error.message);
    }
} )

export { router as adminRoute };