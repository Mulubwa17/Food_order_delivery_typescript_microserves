import express, { Request, Response, NextFunction } from 'express';
import { createFood, deleteFood, getFood, getFoods, updateFood } from '../controllers/foodController';

const router = express.Router();

router.post('/new_food', createFood)

router.get('/get_foods',  getFoods)

router.get('/get_food/:id',  getFood)

router.put('/update_food/:id',  updateFood)

router.delete('/delete_food/:id',  deleteFood)

export { router as foodRoute };