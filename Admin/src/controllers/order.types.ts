export interface createNewOrder {
    foodId: string,
    customerId: string,
    orderTime: string,
    deliveryTime:string,
    destinationAddress: string,
    [key: string]: any
}

export interface updateOrderDetails {
    destinationAddress: string,
    [key: string]: any
}

export interface createNewOrderResponse {
    message?: any,
    data?: any
}

export enum messages {
    duplicate = 'Order with that email alreadyb exists!',
    error = 'Something went wrong, try again!',
    created  = 'Order created successfully!',
    notFound = 'Order not found!',
    found = 'Order found!',
    updated = 'Order updated successfully!',
    deleted = 'Order deleted successfully!'
}

