import express, { Request, Response, NextFunction } from 'express';
import { createInventory, deleteInventoryProfile, getInventoryProfile, getInventorys, updateInventoryProfile } from '../controllers/inventoryController';
// import { isCached, isCached1 } from '../middlewares/cache';

const router = express.Router();

router.post('/new_inventory',async (req:Request, res:Response, next:NextFunction) => {
    try { 
     const response = await createInventory(req.body);
     res.status(201).send(response)
    } catch (error:any) {
        res.status(400).send(error.message);
    }
} )

router.get('/view_inventorys',async (req:Request, res:Response, next:NextFunction) => {
    try {
        const response = await getInventorys();
        res.status(200).send(response)
    } catch (error:any) {
        res.status(400).send(error.message);
    }
} )

router.get('/view_inventory/:id',async (req:Request, res:Response, next:NextFunction) => {
    try {
        const response = await getInventoryProfile(req.params.id);
        res.status(200).send(response)
    } catch (error:any) {
        res.status(400).send(error.message);
    }
})

router.put('/edit_inventory/:id',async(req:Request, res:Response, next:NextFunction) => {
    try {
        const response = await updateInventoryProfile(req.params.id, req.body);
        res.status(200).send(response)
    } catch (error:any) {
        res.status(400).send(error.message);
    }
} )

router.delete('/remove_inventory/:id',async(req:Request, res:Response, next:NextFunction) => {
    try {
        const response = await deleteInventoryProfile(req.params.id);
        res.status(200).send(response)
    } catch (error:any) {
        res.status(400).send(error.message);
    }
} )

export { router as inventoryRoute };