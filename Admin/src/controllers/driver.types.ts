export interface createNewDriver {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    driverUniqueId: String,
    address: string;
    contact: string,
    [key: string]: any
}

export interface updateDriverDetails {
    email: string;
    address: string;
    contact: string,
    [key: string]: any
}

export interface createNewDriverResponse {
    message?: any,
    data?: any
}

export enum messages {
    duplicate = 'Driver with that email alreadyb exists!',
    error = 'Something went wrong, try again!',
    created  = 'Driver created successfully!',
    notFound = 'Driver not found!',
    found = 'Driver found!',
    updated = 'Driver updated successfully!',
    deleted = 'Driver deleted successfully!'
}

