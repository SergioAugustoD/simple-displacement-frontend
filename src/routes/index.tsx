import { useLogin } from "hooks";
import Home from "pages/Home";
import Login from "pages/Login";
import ForgotPass from "pages/Login/ForgotPass";
import RegisterUser from "pages/Login/RegisterUser";
import { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPass />} />
      <Route path="/register" element={<RegisterUser />} />
    </Routes>
  );
};

export const Router = () => {
  const { session, handleCheckLogged } = useLogin();

  useEffect(() => {
    handleCheckLogged();
  }, [handleCheckLogged]);
  return (
    <BrowserRouter>
      {session && localStorage.getItem("isLicensed") ? (
        <AppRoutes />
      ) : (
        <AuthRoutes />
      )}
    </BrowserRouter>
  );
};
