import { InputProps, Input } from 'antd';

const InputUtil = (props: InputProps) => {
  return (
    <Input
      prefix={props.prefix}
      type={props.type}
      placeholder={props.placeholder}
      size={props.size}
    />
  );
};

export default InputUtil;
