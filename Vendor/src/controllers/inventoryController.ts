import { createNewInventory, createNewInventoryResponse, messages, updateInventoryDetails } from "./inventory.types";
import { insertInventory,getInventoryByCategory, getAllInventorys, getInventoryById, updateInventory, deleteInventory } from "../models/inventory";



export const createInventory = async (createNewInventory: createNewInventory):Promise<createNewInventoryResponse> => {

    const { category} = createNewInventory;
    const inventory = await getInventoryByCategory(category);
    if (inventory) {
      return  {message: messages.duplicate};
    }
    const newInventory = await insertInventory(createNewInventory)
    console.log(newInventory);
    return { message:messages.created, data:newInventory}
};

export const getInventorys = async () => {
  const inventorys = await getAllInventorys();
  
  return {inventorys};
}

export const getInventoryProfile = async ( id: string):Promise<createNewInventoryResponse> => {

    const inventory = await getInventoryById( id );

    if (!inventory) {
      return {message: messages.notFound};
    }
   
    return {message: messages.found, data:inventory}

}

export const updateInventoryProfile = async (id:string,updateInventoryDetails:updateInventoryDetails):Promise<createNewInventoryResponse> => {
  
    const inventory = await updateInventory(id,updateInventoryDetails);
      if (!inventory) {
        return {message: messages.notFound};
      }
      return {message: messages.updated, data:inventory}
    

}

export const deleteInventoryProfile = async (id:string):Promise<createNewInventoryResponse> => {

    const inventory = await deleteInventory(id);
    if (!inventory) {
      return {message: messages.notFound};
    }
   return {message: messages.deleted, data:inventory}

}