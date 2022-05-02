import express from 'express';
import { createAdmin, deleteAdmin, getAdmin, getAdmins, updateAdmin } from '../controllers/adminController';
// import { isCached, isCached1 } from '../middlewares/cache';

const router = express.Router();

router.post('/new_admin', createAdmin)

router.get('/get_admins',  getAdmins)

router.get('/get_admin/:id',  getAdmin)

router.put('/update_admin/:id',  updateAdmin)

router.delete('/delete_admin/:id',  deleteAdmin)

export { router as adminRoute };