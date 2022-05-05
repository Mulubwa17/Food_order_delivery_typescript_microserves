import { createNewAdmin, createNewAdminResponse, messages, updateAdminDetails } from "./admin.types";
import { Admin, insertAdmin,getAdminByEmail, getAllAdmins, getAdminById, updateAdmin, deleteAdmin } from "../models/admin";



export const createAdmin = async (createNewAdmin: createNewAdmin):Promise<createNewAdminResponse> => {
 
    const { email} = createNewAdmin;
    const admin = await getAdminByEmail(email);
    if (admin) {
      return  {message: messages.duplicate};
    }
    const newAdmin = await insertAdmin(createNewAdmin)
    console.log(newAdmin);
    return { message:messages.created, data:newAdmin}
};

export const getAdmins = async () => {
  const admins = await getAllAdmins();
  
  return {admins};
}

export const getAdminProfile = async ( id: string):Promise<createNewAdminResponse> => {

    const admin = await getAdminById( id );

    if (!admin) {
      return {message: messages.notFound};
    }
   
    return {message: messages.found, data:admin}

}

export const updateAdminProfile = async (id:string,updateAdminDetails:updateAdminDetails):Promise<createNewAdminResponse> => {
  
    const admin = await updateAdmin(id,updateAdminDetails);
      if (!admin) {
        return {message: messages.notFound};
      }
      return {message: messages.updated, data:admin}
    

}

export const deleteAdminProfile = async (id:string):Promise<createNewAdminResponse> => {

    const admin = await deleteAdmin(id);
    if (!admin) {
      return {message: messages.notFound};
    }
   return {message: messages.deleted, data:admin}

}