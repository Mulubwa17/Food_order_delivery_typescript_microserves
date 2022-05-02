import express, { Request, Response, NextFunction } from 'express';
import { createVendor, deleteVendor, getVendor, getVendors, updateVendor } from '../controllers/vendorController';

const router = express.Router();

router.post('/new_vendor', createVendor)

router.get('/get_vendors',  getVendors)

router.get('/get_vendor/:id',  getVendor)

router.put('/update_vendor/:id',  updateVendor)

router.delete('/delete_vendor/:id',  deleteVendor)

export { router as venderRoute };