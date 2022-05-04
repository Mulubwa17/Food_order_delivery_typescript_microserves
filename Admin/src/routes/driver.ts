import express, { Request, Response, NextFunction } from 'express';
import { createDriver, deleteDriver, getDriver, getDrivers, updateDriver } from '../controllers/driverController';

const router = express.Router();

router.post('/new_driver', createDriver)

router.get('/view_drivers',  getDrivers)

router.get('/view_driver/:id',  getDriver)

router.put('/edit_driver/:id',  updateDriver)

router.delete('/remove_driver/:id',  deleteDriver)

export { router as driverRoute };