const IMG = "https://www.orkut.com/img/orkut-logo.png"

interface LogoProps {
  width?: any;
}

const Logo : React.FC<LogoProps> = ({width}) => {
  return (
    <img
      src={IMG}
      width={width}
      alt="Logo"
    />
  )
};

export default Logo;