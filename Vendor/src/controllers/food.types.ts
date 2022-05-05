export interface createNewFood {
    name: string;
    description: string;
    category: string;
    rating: number;
    price: number;
    vendorId: string;
    [key: string]: any
}

export interface updateFoodDetails {
    name: string;
    description: string;
    category: string;
    rating: number;
    price: number;
    [key: string]: any
}

export interface createNewFoodResponse {
    message?: any,
    data?: any
}

export enum messages {
    duplicate = 'Food with that name already exists!',
    error = 'Something went wrong, try again!',
    created  = 'Food created successfully!',
    notFound = 'Food not found!',
    found = 'Food found!',
    updated = 'Food updated successfully!',
    deleted = 'Food deleted successfully!'
}