export interface createNewInventory {
    vendorId: string;
    category: string;
    description: string;
    items: [
      {
        name: string;
        quantity: Number;
      }
    ];
    [key: string]: any
}

export interface updateInventoryDetails {
   category: string;
    description: string;
    items: [
      {
        name: string;
        quantity: Number;
      }
    ];
    [key: string]: any
}

export interface createNewInventoryResponse {
    message?: any,
    data?: any
}

export enum messages {
    duplicate = 'Inventory with that email alreadyb exists!',
    error = 'Something went wrong, try again!',
    created  = 'Inventory created successfully!',
    notFound = 'Inventory not found!',
    found = 'Inventory found!',
    updated = 'Inventory updated successfully!',
    deleted = 'Inventory deleted successfully!'
}