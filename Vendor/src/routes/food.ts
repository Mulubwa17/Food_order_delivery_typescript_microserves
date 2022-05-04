import express, { Request, Response, NextFunction } from 'express';
import { createFood, deleteFood, getFood, getFoods, updateFood } from '../controllers/foodController';

const router = express.Router();

router.post('/new_food', createFood)

router.get('/view_foods',  getFoods)

router.get('/view_food/:id',  getFood)

router.put('/edit_food/:id',  updateFood)

router.delete('/remove_food/:id',  deleteFood)

export { router as foodRoute };