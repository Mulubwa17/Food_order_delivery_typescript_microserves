export interface createNewVendor {
    name: string;
  proprietor: string;
  email: string;
  password: string;
  address: string;
    contact: string,
    [key: string]: any
}

export interface updateVendorDetails {
    name: string;
    proprietor: string;
    email: string;
    address: string;
    contact: string,
    [key: string]: any
}

export interface createNewVendorResponse {
    message?: any,
    data?: any
}

export enum messages {
    duplicate = 'Vendor with that email alreadyb exists!',
    error = 'Something went wrong, try again!',
    created  = 'Vendor created successfully!',
    notFound = 'Vendor not found!',
    found = 'Vendor found!',
    updated = 'Vendor updated successfully!',
    deleted = 'Vendor deleted successfully!'
}