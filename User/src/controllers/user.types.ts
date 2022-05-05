export interface createNewUser {
    firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: string;
  contact: string;
    [key: string]: any
}

export interface updateUserDetails {
    email: string;
    address: string;
    contact: string,
    [key: string]: any
}

export interface createNewUserResponse {
    message?: any,
    data?: any
}

export enum messages {
    duplicate = 'User with that email alreadyb exists!',
    error = 'Something went wrong, try again!',
    created  = 'User created successfully!',
    notFound = 'User not found!',
    found = 'User found!',
    updated = 'User updated successfully!',
    deleted = 'User deleted successfully!'
}

