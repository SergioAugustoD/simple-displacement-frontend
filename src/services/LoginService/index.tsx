import { ILogin } from "interfaces/ILogin";
import { IUser } from "interfaces/IUser";
import { instance } from "providers/api";

const login = async (data: ILogin) => {
  const response = await instance.post("/user/login", {
    login: data.login,
    password: data.password
  });

  return response.data;
};

const getInfoUser = async (login: string) => {
  const response = await instance.post("/user/info", {
    login: login
  });

  return response.data;
};


export const LoginService = {
  login,
  getInfoUser
};
