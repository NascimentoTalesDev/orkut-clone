interface ButtonProps {
  text: String;
  className: string;
  type?: "submit" | undefined;
  onClick?: any;
}

const Button : React.FC<ButtonProps> = ({text, className, type, onClick}) => {
  return (
    <button 
      className={className} type={type} onClick={onClick}>{text}</button>
  )
}

export default Button;