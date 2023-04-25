import {
  UserOutlined,
  MailOutlined,
  LoginOutlined,
  StarOutlined
} from '@ant-design/icons';

import FormItemUtil from '../../../components/util/FormItem';
import InputUtil from '../../../components/util/Input';
import { FormButton, FormContent, FormS } from './styles';

type RegisterProps = {
  name: string;
  last_name: string;
  email: string;
  login: string;
  password: string;
  onSubmit?: () => void;
};

const RegisterUser: React.FC = () => {
  const onFinish = (values: RegisterProps) => {
    console.log('Received values of form: ', values);
  };

  return (
    <FormS
      name="normal_login"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <FormContent>
        <FormItemUtil
          name="name"
          rules={[{ required: true, message: 'Por favor informe seu Nome!' }]}
        >
          <InputUtil
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Nome"
          />
        </FormItemUtil>
        <FormItemUtil
          name="last-name"
          rules={[
            { required: true, message: 'Por favor informe seu sobrenome!' }
          ]}
        >
          <InputUtil
            prefix={<UserOutlined className="site-form-item-icon" />}
            type="last-name"
            placeholder="Sobrenome"
          />
        </FormItemUtil>
        <FormItemUtil
          name="email"
          rules={[{ required: true, message: 'Por favor informe seu e-mail!' }]}
        >
          <InputUtil
            prefix={<MailOutlined className="site-form-item-icon" />}
            type="email"
            placeholder="E-mail"
          />
        </FormItemUtil>
        <FormItemUtil
          name="login"
          rules={[{ required: true, message: 'Por favor informe seu login!' }]}
        >
          <InputUtil
            prefix={<LoginOutlined className="site-form-item-icon" />}
            type="login"
            placeholder="Login"
          />
        </FormItemUtil>
        <FormItemUtil
          name="password"
          rules={[{ required: true, message: 'Por favor informe sua senha!' }]}
        >
          <InputUtil
            prefix={<StarOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Senha"
          />
        </FormItemUtil>

        <FormItemUtil>
          <FormButton
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Registrar
          </FormButton>
        </FormItemUtil>
      </FormContent>
    </FormS>
  );
};

export default RegisterUser;
