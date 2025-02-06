import React from "react";

type ButtonProps = {
  title: string;
  className?: string; // Permitir que as classes sejam passadas para o botão
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ title, className }: ButtonProps) => {
  return (
    <button
      className={`bg-red text-sm text-primaryText rounded-lg cursor-pointer flex justify-center items-center ${className} hover:bg-buttonHover`}
    >
      {title}
    </button>
  );
};

export default Button;
