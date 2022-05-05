import { createNewDriver, createNewDriverResponse, messages, updateDriverDetails } from "./driver.types";
import { Driver, insertDriver,getDriverByContact, getAllDrivers, getDriverById, updateDriver, deleteDriver } from "../models/driver";



export const createDriver = async (createNewDriver: createNewDriver):Promise<createNewDriverResponse> => {
 
    const { contact } = createNewDriver;
    const driver = await getDriverByContact(contact);
    if (driver) {
      return  {message: messages.duplicate};
    }
    const newDriver = await insertDriver(createNewDriver)
    console.log(newDriver);
    return { message:messages.created, data:newDriver}
};

export const getDrivers = async () => {
  const drivers = await getAllDrivers();
  
  return {drivers};
}

export const getDriverProfile = async ( id: string):Promise<createNewDriverResponse> => {

    const driver = await getDriverById( id );

    if (!driver) {
      return {message: messages.notFound};
    }
   
    return {message: messages.found, data:driver}

}

export const updateDriverProfile = async (id:string,updateDriverDetails:updateDriverDetails):Promise<createNewDriverResponse> => {
  
    const driver = await updateDriver(id,updateDriverDetails);
      if (!driver) {
        return {message: messages.notFound};
      }
      return {message: messages.updated, data:driver}
    

}

export const deleteDriverProfile = async (id:string):Promise<createNewDriverResponse> => {

    const driver = await deleteDriver(id);
    if (!driver) {
      return {message: messages.notFound};
    }
   return {message: messages.deleted, data:driver}

}