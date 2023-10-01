interface InputButtonProps {
  type: string;
  required?: boolean;
  width?: string;
  className?: string;
  name?: string;
  value?: string;
  onChange?: any;
}

const InputButton: React.FC<InputButtonProps> = ({type, required, className, name, width, value, onChange }) => {
  return (
    <input className={`outline-none pl-1 ${className}`} type={type} required={required} name={name} width={width} value={value} onChange={onChange}></input>
  )
}

export default InputButton;