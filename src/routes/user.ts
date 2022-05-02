import express, { Request, Response, NextFunction } from 'express';
import { createUser, deleteUser, getUser, getUsers, updateUser } from '../controllers/userController';

const router = express.Router();

router.post('/new_user', createUser)

router.get('/get_users',  getUsers)

router.get('/get_user/:id',  getUser)

router.put('/update_user/:id',  updateUser)

router.delete('/delete_user/:id',  deleteUser)

export { router as userRoute };