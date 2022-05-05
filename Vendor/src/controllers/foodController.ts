import { createNewFood, createNewFoodResponse, messages, updateFoodDetails } from "./food.types";
import {  insertFood,getFoodByEmail, getAllFoods, getFoodById, updateFood, deleteFood } from "../models/food";



export const createFood = async (createNewFood: createNewFood):Promise<createNewFoodResponse> => {
 
    const { name} = createNewFood;
    const food = await getFoodByEmail(name);
    if (food) {
      return  {message: messages.duplicate};
    }
    const newFood = await insertFood(createNewFood)
    console.log(newFood);
    return { message:messages.created, data:newFood}
};

export const getFoods = async () => {
  const foods = await getAllFoods();
  
  return {foods};
}

export const getFoodProfile = async ( id: string):Promise<createNewFoodResponse> => {

    const food = await getFoodById( id );

    if (!food) {
      return {message: messages.notFound};
    }
   
    return {message: messages.found, data:food}

}

export const updateFoodProfile = async (id:string,updateFoodDetails:updateFoodDetails):Promise<createNewFoodResponse> => {

    const food = await updateFood(id,updateFoodDetails);
      if (!food) {
        return {message: messages.notFound};
      }
      return {message: messages.updated, data:food}
    

}

export const deleteFoodProfile = async (id:string):Promise<createNewFoodResponse> => {

    const food = await deleteFood(id);
    if (!food) {
      return {message: messages.notFound};
    }
   return {message: messages.deleted, data:food}

}