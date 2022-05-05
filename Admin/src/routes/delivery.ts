import express, { Request, Response, NextFunction } from 'express';

import { createDelivery, deleteDeliveryProfile, getDeliveryProfile, getDeliverys, updateDeliveryProfile } from '../controllers/deliveryController';
// import { isCached, isCached1 } from '../middlewares/cache';

const router = express.Router();

router.post('/new_delivery',async (req:Request, res:Response, next:NextFunction) => {
    try { 
     const response = await createDelivery(req.body);
     res.status(201).send(response)
    } catch (error:any) {
        res.status(400).send(error.message);
    }
} )

router.get('/view_deliverys',async (req:Request, res:Response, next:NextFunction) => {
    try {
        const response = await getDeliverys();
        res.status(200).send(response)
    } catch (error:any) {
        res.status(400).send(error.message);
    }
} )

router.get('/view_delivery/:id',async (req:Request, res:Response, next:NextFunction) => {
    try {
        const response = await getDeliveryProfile(req.params.id);
        res.status(200).send(response)
    } catch (error:any) {
        res.status(400).send(error.message);
    }
})

router.put('/edit_delivery/:id',async(req:Request, res:Response, next:NextFunction) => {
    try {
        const response = await updateDeliveryProfile(req.params.id, req.body);
        res.status(200).send(response)
    } catch (error:any) {
        res.status(400).send(error.message);
    }
} )

router.delete('/remove_delivery/:id',async(req:Request, res:Response, next:NextFunction) => {
    try {
        const response = await deleteDeliveryProfile(req.params.id);
        res.status(200).send(response)
    } catch (error:any) {
        res.status(400).send(error.message);
    }
} )

export { router as deliveryRoute };