import React from "react";
import { UseFormRegister } from "react-hook-form";
interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  error?: string;
  register: UseFormRegister<any>;
}

const Input: React.FC<InputProps> = ({ placeholder, type, name, register, error }) => {
  return (
    <div className="mb-5 w-full">
      <input
        placeholder={placeholder}
        type={type}
        id={name}
        {...register(name)}
        className="mt-2 h-[45px] w-full px-3 py-2 border border-red bg-background rounded-md pl-12 placeholder:font-roboto"
      />
      {error && <small className="text-red">{error}</small>}
    </div>
  );
};

export default Input;
