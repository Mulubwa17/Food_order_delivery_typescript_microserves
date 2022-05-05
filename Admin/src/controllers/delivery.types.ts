export interface createNewDelivery {
    orderId: string,
    driverId: string,

    [key: string]: any
}

export interface updateDeliveryDetails {
    driverId: string,
    [key: string]: any
}

export interface createNewDeliveryResponse {
    message?: any,
    data?: any
}

export enum messages {
    duplicate = 'Delivery with that email alreadyb exists!',
    error = 'Something went wrong, try again!',
    created  = 'Delivery created successfully!',
    notFound = 'Delivery not found!',
    found = 'Delivery found!',
    updated = 'Delivery updated successfully!',
    deleted = 'Delivery deleted successfully!'
}

