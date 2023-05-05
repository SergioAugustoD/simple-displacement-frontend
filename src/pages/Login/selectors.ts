import { userState } from "atoms/Login";
import { selector } from "recoil";

export const dataUserState = selector({
  key: "userDataState",
  get: ({ get }) => {
    const userData = get(userState);
    return userData;
  }
});
