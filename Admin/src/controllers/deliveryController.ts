import { createNewDelivery, createNewDeliveryResponse, messages, updateDeliveryDetails } from "./delivery.types";
import {  insertDelivery, getAllDeliverys, getDeliveryById, updateDelivery, deleteDelivery } from "../models/delivery";



export const createDelivery = async (createNewDelivery: createNewDelivery):Promise<createNewDeliveryResponse> => {
 
    const newDelivery = await insertDelivery(createNewDelivery)
    console.log(newDelivery);
    return { message:messages.created, data:newDelivery}
};

export const getDeliverys = async () => {
  const deliverys = await getAllDeliverys();
  
  return {deliverys};
}

export const getDeliveryProfile = async ( id: string):Promise<createNewDeliveryResponse> => {

    const delivery = await getDeliveryById( id );

    if (!delivery) {
      return {message: messages.notFound};
    }
   
    return {message: messages.found, data:delivery}

}

export const updateDeliveryProfile = async (id:string,updateDeliveryDetails:updateDeliveryDetails):Promise<createNewDeliveryResponse> => {
  
    const delivery = await updateDelivery(id,updateDeliveryDetails);
      if (!delivery) {
        return {message: messages.notFound};
      }
      return {message: messages.updated, data:delivery}
    

}

export const deleteDeliveryProfile = async (id:string):Promise<createNewDeliveryResponse> => {

    const delivery = await deleteDelivery(id);
    if (!delivery) {
      return {message: messages.notFound};
    }
   return {message: messages.deleted, data:delivery}

}