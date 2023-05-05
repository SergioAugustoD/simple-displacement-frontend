import { useLogin } from "hooks";
import { ILogin } from "interfaces/ILogin";
import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginService } from "services/LoginService";
import { BoxImg, BoxLogin, ButtonS, Container, DivButtons, InputS } from "./styles";
import { MdPassword, MdLogin } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { toast } from "react-hot-toast";

const Login = () => {
  const [dataLogin, setDataLogin] = useState<ILogin>(null);
  const navigate = useNavigate();
  const { handleSignIn } = useLogin();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = useCallback(async () => {
    window.event.preventDefault();
    setIsLoading(true)
    
    if(dataLogin === null) {
      setIsLoading(false)
      return;
    }
    const res = await LoginService.login(dataLogin);

    if (!res.err) {
      setTimeout(() => {
        setIsLoading(false);
        handleSignIn(res.data)
        toast.success(res.msg, {duration: 4000});
        navigate('/');
      }, 2000);
    }
    if (res.err) {
      setIsLoading(false)
      toast.error(res.msg, {duration: 4000})
    }
  }, [dataLogin, handleSignIn, navigate]);

  return (
    <Container>
      <BoxLogin>
        <InputS
          name="login"
          placeholder="Login"
          prefix={<FaRegUser size={30} />}
          onChange={(e) =>
            setDataLogin({ ...dataLogin, login: e.target.value })
          }
        />
        <InputS
          type="password"
          name="password"
          placeholder="Senha"
          prefix={<MdPassword size={30} />}
          onChange={(e) =>
            setDataLogin({ ...dataLogin, password: e.target.value })
          }
        />
        <DivButtons>
          <ButtonS loading={isLoading} icon={<MdLogin size={30} />} onClick={handleLogin}>Logar</ButtonS>
        <Link style={{textDecoration: 'none', color: 'black'}} to='/forgot-password'>Esqueceu a senha?</Link>
        </DivButtons>
          <Link style={{textDecoration: 'none', color: 'black'}} to='/register'>Não tem uma conta ? Registre-se</Link>
      </BoxLogin>
      <BoxImg />
    </Container>
  );
};

export default Login;
