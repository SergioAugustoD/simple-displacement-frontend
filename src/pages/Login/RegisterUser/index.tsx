import {useState, useCallback} from 'react';
import { FaRegUser, FaSave } from "react-icons/fa";
import {
  BoxRegister,
  ButtonRegisterS,
  Container,
  InputRegisterS,
} from "../styles";
import { Col, Row } from "antd";
import { IUser } from 'interfaces/IUser';
import { UserService } from 'services/UserService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataRegister, setDataRegister] = useState<IUser>(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = useCallback(async () => {
    window.event.preventDefault();
    setIsLoading(true);

    if(dataRegister === null) {
      setIsLoading(false);
      return;
    }

    const res = await UserService.registerUser(dataRegister);

    if(!res.err){
      setTimeout(() => {
        setIsLoading(false);
        toast.success(res.message, {duration: 4000});
        navigate('/');
      }, 2000);
    }

    if(res.err){
      setIsLoading(false)
      toast.error(res.message);
    }

  },[dataRegister]);

  return (
    <Container>
      <BoxRegister>
        <div className="main-inpts" style={{ marginTop: "2vh" }}>
          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            style={{ padding: "50px 25px 20px" }}
          >
            <Col span={12}>
              <InputRegisterS
                name="name"
                placeholder="Nome"
                prefix={<FaRegUser size={30} />}
                onChange={(e) =>
                  setDataRegister({ ...dataRegister, name: e.target.value })
                }
              />
            </Col>
            <Col span={12}>
              <InputRegisterS
                name="last-name"
                placeholder="Sorenome"
                prefix={<FaRegUser size={30} />}
                onChange={(e) =>
                  setDataRegister({ ...dataRegister, last_name: e.target.value })
                }
              />
            </Col>
          </Row>
          <Row style={{ padding: "0px 25px 20px" }}>
            <Col flex={5}>
              <InputRegisterS
                name="email"
                placeholder="E-mail"
                prefix={<FaRegUser size={30} />}
                onChange={(e) =>
                  setDataRegister({ ...dataRegister, email: e.target.value })
                }
              />
            </Col>
          </Row>
          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            style={{ padding: "0px 25px 20px" }}
          >
            <Col span={12}>
              <InputRegisterS
                name="login"
                placeholder="Login"
                prefix={<FaRegUser size={30} />}
                onChange={(e) =>
                  setDataRegister({ ...dataRegister, login: e.target.value })
                }
              />
            </Col>
            <Col span={12}>
              <InputRegisterS.Password
                name="password"
                placeholder="Senha"
                prefix={<FaRegUser size={30} />}
                visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                onChange={(e) =>
                  setDataRegister({ ...dataRegister, password: e.target.value })
                }
              />
            </Col>
          </Row>
          <Row style={{ padding: "0px 25px 20px" }}>
            <Col>
              <ButtonRegisterS loading={isLoading} icon={<FaSave size={24}/>} onClick={handleSubmit}>Salvar</ButtonRegisterS>
            </Col>
          </Row>
        </div>
      </BoxRegister>
    </Container>
  );
};

export default Register;
