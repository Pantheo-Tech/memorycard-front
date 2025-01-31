interface ButtonProps {
  title: string; // Define que title é do tipo string
}

const Button: React.FC<ButtonProps> = ({ title }) => {
  return <button className="bg-red rounded-md px-4 py-1 text-sm font-normal">{title}</button>;
};

export default Button;
