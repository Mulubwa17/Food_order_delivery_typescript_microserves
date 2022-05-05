import { createNewOrder, createNewOrderResponse, messages, updateOrderDetails } from "./order.types";
import { Order, insertOrder, getAllOrders, getOrderById, updateOrder, deleteOrder } from "../models/order";



export const createOrder = async (createNewOrder: createNewOrder):Promise<createNewOrderResponse> => {
 
    const newOrder = await insertOrder(createNewOrder)
    console.log(newOrder);
    return { message:messages.created, data:newOrder}
};

export const getOrders = async () => {
  const orders = await getAllOrders();
  
  return {orders};
}

export const getOrderProfile = async ( id: string):Promise<createNewOrderResponse> => {

    const order = await getOrderById( id );

    if (!order) {
      return {message: messages.notFound};
    }
   
    return {message: messages.found, data:order}

}

export const updateOrderProfile = async (id:string,updateOrderDetails:updateOrderDetails):Promise<createNewOrderResponse> => {
  
    const order = await updateOrder(id,updateOrderDetails);
      if (!order) {
        return {message: messages.notFound};
      }
      return {message: messages.updated, data:order}
    

}

export const deleteOrderProfile = async (id:string):Promise<createNewOrderResponse> => {

    const order = await deleteOrder(id);
    if (!order) {
      return {message: messages.notFound};
    }
   return {message: messages.deleted, data:order}

}