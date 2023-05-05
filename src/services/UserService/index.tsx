import { IUser } from "interfaces/IUser";
import { instance } from "providers/api";


const registerUser = async (data: IUser) => {
    const response = await instance.post('/user/register', data);
  
    return response.data;
  }

export const UserService = {
    registerUser
}