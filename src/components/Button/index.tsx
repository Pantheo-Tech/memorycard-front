import React from "react";

type ButtonProps = {
  title: string;
  className?: string;
  type?: "button" | "submit" | undefined;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ title, className, type }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`bg-red text-sm text-primaryText rounded-lg cursor-pointer flex justify-center items-center ${className} hover:bg-buttonHover`}
    >
      {title}
    </button>
  );
};

export default Button;
