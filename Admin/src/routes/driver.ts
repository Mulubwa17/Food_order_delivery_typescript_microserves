import express, { Request, Response, NextFunction } from 'express';
import { createDriver, deleteDriverProfile, getDriverProfile, getDrivers, updateDriverProfile } from '../controllers/driverController';
// import { isCached, isCached1 } from '../middlewares/cache';

const router = express.Router();

router.post('/new_driver',async (req:Request, res:Response, next:NextFunction) => {
    try { 
     const response = await createDriver(req.body);
     res.status(201).send(response)
    } catch (error:any) {
        res.status(400).send(error.message);
    }
} )

router.get('/view_drivers',async (req:Request, res:Response, next:NextFunction) => {
    try {
        const response = await getDrivers();
        res.status(200).send(response)
    } catch (error:any) {
        res.status(400).send(error.message);
    }
} )

router.get('/view_driver/:id',async (req:Request, res:Response, next:NextFunction) => {
    try {
        const response = await getDriverProfile(req.params.id);
        res.status(200).send(response)
    } catch (error:any) {
        res.status(400).send(error.message);
    }
})

router.put('/edit_driver/:id',async(req:Request, res:Response, next:NextFunction) => {
    try {
        const response = await updateDriverProfile(req.params.id, req.body);
        res.status(200).send(response)
    } catch (error:any) {
        res.status(400).send(error.message);
    }
} )

router.delete('/remove_driver/:id',async(req:Request, res:Response, next:NextFunction) => {
    try {
        const response = await deleteDriverProfile(req.params.id);
        res.status(200).send(response)
    } catch (error:any) {
        res.status(400).send(error.message);
    }
} )

export { router as driverRoute };