import express, { Request, Response, NextFunction } from 'express';

import { createFood, deleteFoodProfile, getFoodProfile, getFoods, updateFoodProfile } from '../controllers/foodController';
// import { isCached, isCached1 } from '../middlewares/cache';

const router = express.Router();

router.post('/new_food',async (req:Request, res:Response, next:NextFunction) => {
    try { 
     const response = await createFood(req.body);
     res.status(201).send(response)
    } catch (error:any) {
        res.status(400).send(error.message);
    }
} )

router.get('/view_foods',async (req:Request, res:Response, next:NextFunction) => {
    try {
        const response = await getFoods();
        res.status(200).send(response)
    } catch (error:any) {
        res.status(400).send(error.message);
    }
} )

router.get('/view_food/:id',async (req:Request, res:Response, next:NextFunction) => {
    try {
        const response = await getFoodProfile(req.params.id);
        res.status(200).send(response)
    } catch (error:any) {
        res.status(400).send(error.message);
    }
})

router.put('/edit_food/:id',async(req:Request, res:Response, next:NextFunction) => {
    try {
        const response = await updateFoodProfile(req.params.id, req.body);
        res.status(200).send(response)
    } catch (error:any) {
        res.status(400).send(error.message);
    }
} )

router.delete('/remove_food/:id',async(req:Request, res:Response, next:NextFunction) => {
    try {
        const response = await deleteFoodProfile(req.params.id);
        res.status(200).send(response)
    } catch (error:any) {
        res.status(400).send(error.message);
    }
} )

export { router as foodRoute };