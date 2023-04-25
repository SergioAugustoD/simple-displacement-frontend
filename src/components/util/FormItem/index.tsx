import { FormItemProps } from 'antd';
import { FormItem } from 'pages/Login/styles';

const FormItemUtil = (props: FormItemProps) => {
  return (
    <FormItem name={props.name} rules={props.rules}>
      {props.children}
    </FormItem>
  );
};

export default FormItemUtil;
