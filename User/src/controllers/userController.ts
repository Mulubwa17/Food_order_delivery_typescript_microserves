import { createNewUser, createNewUserResponse, messages, updateUserDetails } from "./user.types";
import { User, insertUser,getUserByEmail, getAllUsers, getUserById, updateUser, deleteUser } from "../models/user";



export const createUser = async (createNewUser: createNewUser):Promise<createNewUserResponse> => {
 
    const { email} = createNewUser;
    const user = await getUserByEmail(email);
    if (user) {
      return  {message: messages.duplicate};
    }
    const newUser = await insertUser(createNewUser)
    console.log(newUser);
    return { message:messages.created, data:newUser}
};

export const getUsers = async () => {
  const users = await getAllUsers();
  
  return {users};
}

export const getUserProfile = async ( id: string):Promise<createNewUserResponse> => {

    const user = await getUserById( id );

    if (!user) {
      return {message: messages.notFound};
    }
   
    return {message: messages.found, data:User}

}

export const updateUserProfile = async (id:string,updateUserDetails:updateUserDetails):Promise<createNewUserResponse> => {
  
    const user = await updateUser(id,updateUserDetails);
      if (!user) {
        return {message: messages.notFound};
      }
      return {message: messages.updated, data:user}
    

}

export const deleteUserProfile = async (id:string):Promise<createNewUserResponse> => {

    const user = await deleteUser(id);
    if (!user) {
      return {message: messages.notFound};
    }
   return {message: messages.deleted, data:user}

}