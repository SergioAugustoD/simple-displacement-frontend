import Login from "pages/Login"
import ForgotPass from "pages/Login/ForgotPass"
import RegisterUser from "pages/Login/RegisterUser"
import { Routes, Route } from "react-router-dom"

const LoginRoutes = () => {


    return(
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path="/forgot-password" element={<ForgotPass/>} />
            <Route path='/register' element={<RegisterUser />} />
        </Routes>
    )
}

export default LoginRoutes;