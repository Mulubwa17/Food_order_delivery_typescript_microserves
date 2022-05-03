import express, { Request, Response, NextFunction } from 'express';
import { createVendor, deleteVendor, getVendor, getVendors, updateVendor } from '../controllers/vendorController';

const router = express.Router();

router.post('/new_vendor', createVendor)

router.get('/view_vendors',  getVendors)

router.get('/view_vendor/:id',  getVendor)

router.put('/edit_vendor/:id',  updateVendor)

router.delete('/remove_vendor/:id',  deleteVendor)

export { router as venderRoute };