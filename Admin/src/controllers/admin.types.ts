export interface createNewAdmin {
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  [key: string]: any;
}

export interface updateAdminDetails {
  email: string;
  contact: string;
  [key: string]: any;
}

export interface createNewAdminResponse {
  message?: any;
  data?: any;
}

export enum messages {
  duplicate = "User with that email alreadyb exists!",
  error = "Something went wrong, try again!",
  created = "User created successfully!",
  notFound = "User not found!",
  found = "User found!",
  updated = "User updated successfully!",
  deleted = "User deleted successfully!",
}
