import { userState } from "atoms/Login";
import { IUser } from "interfaces/IUser";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { LoginService } from "services/LoginService";

export default () => {
  const [session, setSession] = useRecoilState(userState);

  const handleSignIn = useCallback(
    (data: IUser) => {
      setSession(data);
      localStorage.setItem("isLicensed", "true");
      localStorage.setItem("login", data.login);
    },
    [setSession]
  );

  const handleLogOut = useCallback(() => {
    setSession(null);
    localStorage.removeItem("isLicensed");
    localStorage.removeItem("login");
  }, [setSession]);

  const handleCheckLogged = useCallback(async () => {
    const login = localStorage.getItem("login");
    if (localStorage.getItem("isLicensed") && localStorage.getItem("login")) {
      const data = await LoginService.getInfoUser(login);

      handleSignIn(data);
    }
  }, [handleSignIn]);

  return {
    session,
    handleSignIn,
    handleLogOut,
    handleCheckLogged
  };
};
