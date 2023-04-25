import { MailFilled } from '@ant-design/icons';

import InputUtil from '../../../components/util/Input';

const ForgotPass = () => {
  return (
    <>
      <InputUtil
        size="large"
        placeholder="Informe seu e-mail!"
        prefix={<MailFilled />}
      />
    </>
  );
};

export default ForgotPass;
