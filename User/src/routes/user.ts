import express, { Request, Response, NextFunction } from 'express';
import { createUser, deleteUser, getUser, getUsers, updateUser } from '../controllers/userController';

const router = express.Router();

router.post('/new_user', createUser)

router.get('/view_users',  getUsers)

router.get('/view_user/:id',  getUser)

router.put('/edit_user/:id',  updateUser)

router.delete('/remove_user/:id',  deleteUser)

export { router as userRoute };