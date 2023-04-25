import { Form, Button } from 'antd';
import styled from 'styled-components';

const FormS = styled(Form)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;
const LoginForgot = styled.a`
  float: right;
`;

const FormContent = styled.div`
  max-width: 300px;
`;

const FormItem = styled(Form.Item)`
  && {
    width: 300px;
  }
`;

const FormButton = styled(Button)`
  && {
    width: 100%;
  }
`;
export { FormS, LoginForgot, FormContent, FormItem, FormButton };
// .form-content {
//   max-width: 300px;
// }
// .login-form-forgot {
//   float: right;
// }
// .ant-col-rtl .login-form-forgot {
//   float: left;
// }
// .login-form-button {
//   width: 100%;
// }
