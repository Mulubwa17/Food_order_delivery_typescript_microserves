import express, { Request, Response, NextFunction } from 'express';
import { createInventory, deleteInventory, getInventory, getInventorys, updateInventory } from '../controllers/inventoryController';

const router = express.Router();

router.post('/new_inventory', createInventory)

router.get('/get_inventorys',  getInventorys)

router.get('/get_inventory/:id',  getInventory)

router.put('/update_inventory/:id',  updateInventory)

router.delete('/delete_inventory/:id',  deleteInventory)

export { router as inventoryRoute };