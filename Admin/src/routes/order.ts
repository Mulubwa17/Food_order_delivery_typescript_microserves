import express, { Request, Response, NextFunction } from 'express';
import { createOrder, deleteOrderProfile, getOrderProfile, getOrders, updateOrderProfile } from '../controllers/orderController';
// import { isCached, isCached1 } from '../middlewares/cache';

const router = express.Router();

router.post('/new_order',async (req:Request, res:Response, next:NextFunction) => {
    try { 
     const response = await createOrder(req.body);
     res.status(201).send(response)
    } catch (error:any) {
        res.status(400).send(error.message);
    }
} )

router.get('/view_orders',async (req:Request, res:Response, next:NextFunction) => {
    try {
        const response = await getOrders();
        res.status(200).send(response)
    } catch (error:any) {
        res.status(400).send(error.message);
    }
} )

router.get('/view_order/:id',async (req:Request, res:Response, next:NextFunction) => {
    try {
        const response = await getOrderProfile(req.params.id);
        res.status(200).send(response)
    } catch (error:any) {
        res.status(400).send(error.message);
    }
})

router.put('/edit_order/:id',async(req:Request, res:Response, next:NextFunction) => {
    try {
        const response = await updateOrderProfile(req.params.id, req.body);
        res.status(200).send(response)
    } catch (error:any) {
        res.status(400).send(error.message);
    }
} )

router.delete('/remove_order/:id',async(req:Request, res:Response, next:NextFunction) => {
    try {
        const response = await deleteOrderProfile(req.params.id);
        res.status(200).send(response)
    } catch (error:any) {
        res.status(400).send(error.message);
    }
} )

export { router as orderRoute };