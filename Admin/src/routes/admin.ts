import express from 'express';
import { createAdmin, deleteAdmin, getAdmin, getAdmins, updateAdmin } from '../controllers/adminController';
// import { isCached, isCached1 } from '../middlewares/cache';

const router = express.Router();

router.post('/new_admin', createAdmin)

router.get('/view_admins',  getAdmins)

router.get('/view_admin/:id',  getAdmin)

router.put('/edit_admin/:id',  updateAdmin)

router.delete('/remove_admin/:id',  deleteAdmin)

export { router as adminRoute };