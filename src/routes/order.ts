import express, { Router } from 'express';
import { createOrder, deleteOrder, getOrder, getOrders, updateOrder } from '../controllers/orderController';
import { isCached, isCachedList } from '../middlewares/cache';

const router = express.Router();

router.post('/new_order', createOrder);

router.get('/view_orders',isCachedList,  getOrders)

router.get('/view_order/:id',isCached,  getOrder)

router.put('/edit_order/:id',  updateOrder)

router.delete('/remove_order/:id',  deleteOrder)

export { router as orderRoute };