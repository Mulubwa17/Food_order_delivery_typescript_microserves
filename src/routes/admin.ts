import express,{  Request, Response} from 'express';
import { createAdmin, deleteAdmin, getAdmin, getAdmins, updateAdmin } from '../controllers/admin/adminController';
// import { isCached, isCached1 } from '../middlewares/cache';

const router = express.Router();

router.post('/new_admin', async (request:Request, response: Response)=>{
    try {
        const { firstName, lastName, contact, email}= request.body
        const response= await createAdmin({firstName,lastName,contact,email})
    } catch (error) {
        
    }
})

router.get('/get_admins',  getAdmins)

router.get('/get_admin/:id',  getAdmin)

router.put('/update_admin/:id',  updateAdmin)

router.delete('/delete_admin/:id',  deleteAdmin)

export { router as adminRoute };