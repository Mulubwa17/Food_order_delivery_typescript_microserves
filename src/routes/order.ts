import express, { Router } from 'express';
import { createOrder, deleteOrder, getOrder, getOrders, updateOrder } from '../controllers/orderController';
import { isCached, isCachedList } from '../middlewares/cache';

const router = express.Router();

router.post('/new_order', createOrder);

router.get('/get_orders',isCachedList,  getOrders)

router.get('/get_order/:id',isCached,  getOrder)

router.put('/update_order/:id',  updateOrder)

router.delete('/delete_order/:id',  deleteOrder)

export { router as orderRoute };