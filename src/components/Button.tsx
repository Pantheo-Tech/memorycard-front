type ButtonProps = {
  title: string;
  height?: string;
  width?: string;
};

const Button = ({ title, height = "34px", width = "142px" }: ButtonProps) => {
  return (
    <div
      className="bg-red text-sm text-primaryText rounded-lg cursor-pointer flex justify-center items-center"
      style={{ height, width }}
    >
      {title}
    </div>
  );
};

export default Button;
