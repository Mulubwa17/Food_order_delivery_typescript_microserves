export interface NewAdminParams {
    firstName:string;
    email:string,
    lastName:string,
    contact:string
   }
   
  export enum StatusCodes{
     SUCESSS='SUCCESS',
     ERROR='ERROR'
   }
   export interface NewAdminResponse{
    status: StatusCodes,
    message: string,
    data?: any 
   }