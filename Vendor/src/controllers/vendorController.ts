import { createNewVendor, createNewVendorResponse, messages, updateVendorDetails } from "./vendor.types";
import { insertVendor,getVendorByEmail, getAllVendors, getVendorById, updateVendor, deleteVendor } from "../models/vendor";



export const createVendor = async (createNewVendor: createNewVendor):Promise<createNewVendorResponse> => {

    const { email} = createNewVendor;
    const vendor = await getVendorByEmail(email);
    if (vendor) {
      return  {message: messages.duplicate};
    }
    const newVendor = await insertVendor(createNewVendor)
    console.log(newVendor);
    return { message:messages.created, data:newVendor}
};

export const getVendors = async () => {
  const vendors = await getAllVendors();
  
  return {vendors};
}

export const getVendorProfile = async ( id: string):Promise<createNewVendorResponse> => {

    const vendor = await getVendorById( id );

    if (!vendor) {
      return {message: messages.notFound};
    }
   
    return {message: messages.found, data:vendor}

}

export const updateVendorProfile = async (id:string,updateVendorDetails:updateVendorDetails):Promise<createNewVendorResponse> => {
  
    const vendor = await updateVendor(id,updateVendorDetails);
      if (!vendor) {
        return {message: messages.notFound};
      }
      return {message: messages.updated, data:vendor}
    

}

export const deleteVendorProfile = async (id:string):Promise<createNewVendorResponse> => {

    const vendor = await deleteVendor(id);
    if (!vendor) {
      return {message: messages.notFound};
    }
   return {message: messages.deleted, data:vendor}

}