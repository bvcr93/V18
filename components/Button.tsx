

type Props = {
  className: string;
  value: string;
  onClick?: () => void
  
};

const Button = ({ value, className , onClick}: Props) => {
  return <button onClick={onClick} className={className}>{value}</button>;
};

export default Button;
