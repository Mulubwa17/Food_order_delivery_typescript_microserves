import express, { Request, Response, NextFunction } from 'express';
import { createInventory, deleteInventory, getInventory, getInventorys, updateInventory } from '../controllers/inventoryController';

const router = express.Router();

router.post('/new_inventory', createInventory)

router.get('/view_inventorys',  getInventorys)

router.get('/view_inventory/:id',  getInventory)

router.put('/edit_inventory/:id',  updateInventory)

router.delete('/remove_inventory/:id',  deleteInventory)

export { router as inventoryRoute };