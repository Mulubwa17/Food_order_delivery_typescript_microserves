import express, { Request, Response, NextFunction } from 'express';
import { createVendor, deleteVendorProfile, getVendorProfile, getVendors, updateVendorProfile } from '../controllers/vendorController';
// import { isCached, isCached1 } from '../middlewares/cache';

const router = express.Router();

router.post('/new_vendor',async (req:Request, res:Response, next:NextFunction) => {
    try { 
     const response = await createVendor(req.body);
     res.status(201).send(response)
    } catch (error:any) {
        res.status(400).send(error.message);
    }
} )

router.get('/view_vendors',async (req:Request, res:Response, next:NextFunction) => {
    try {
        const response = await getVendors();
        res.status(200).send(response)
    } catch (error:any) {
        res.status(400).send(error.message);
    }
} )

router.get('/view_vendor/:id',async (req:Request, res:Response, next:NextFunction) => {
    try {
        const response = await getVendorProfile(req.params.id);
        res.status(200).send(response)
    } catch (error:any) {
        res.status(400).send(error.message);
    }
})

router.put('/edit_vendor/:id',async(req:Request, res:Response, next:NextFunction) => {
    try {
        const response = await updateVendorProfile(req.params.id, req.body);
        res.status(200).send(response)
    } catch (error:any) {
        res.status(400).send(error.message);
    }
} )

router.delete('/remove_vendor/:id',async(req:Request, res:Response, next:NextFunction) => {
    try {
        const response = await deleteVendorProfile(req.params.id);
        res.status(200).send(response)
    } catch (error:any) {
        res.status(400).send(error.message);
    }
} )

export { router as vendorRoute };