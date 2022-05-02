import express, { Request, Response, NextFunction } from 'express';
import { createDriver, deleteDriver, getDriver, getDrivers, updateDriver } from '../controllers/driverController';

const router = express.Router();

router.post('/new_driver', createDriver)

router.get('/get_drivers',  getDrivers)

router.get('/get_driver/:id',  getDriver)

router.put('/update_driver/:id',  updateDriver)

router.delete('/delete_driver/:id',  deleteDriver)

export { router as driverRoute };