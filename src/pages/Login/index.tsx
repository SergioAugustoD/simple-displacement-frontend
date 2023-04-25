import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Checkbox, Input } from 'antd';

import FormItemUtil from '../../components/util/FormItem';
import InputUtil from '../../components/util/Input';
import { FormButton, FormContent, FormItem, FormS } from './styles';

type LoginProps = {
  login: string;
  password: string;
  onSubmit?: () => void;
};

const Login: React.FC = () => {
  const onFinish = (values: LoginProps) => {
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
          name="login"
          rules={[{ required: true, message: 'Por favor informe seu login!' }]}
        >
          <InputUtil
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Login"
          />
        </FormItemUtil>
        <FormItemUtil
          name="password"
          rules={[{ required: true, message: 'Por favor informe sua senha!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Senha"
          />
        </FormItemUtil>
        <FormItemUtil>
          <FormItem name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </FormItem>

          <a className="login-form-forgot" href="/forgot-password">
            Esqueceu a senha
          </a>
        </FormItemUtil>

        <FormItemUtil>
          <FormButton
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Logar
          </FormButton>
          Or <a href="/register">Registre-se!</a>
        </FormItemUtil>
      </FormContent>
    </FormS>
  );
};

export default Login;
