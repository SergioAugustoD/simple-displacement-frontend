import { IUser } from "interfaces/IUser";
import { atom } from "recoil";

export const userState = atom<IUser>({
  key: "userState",
  default: undefined
});
