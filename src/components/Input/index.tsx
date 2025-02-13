import React from "react";

interface InputProps {
  placeholder: string;
  type: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  error?: string;
}

const Input: React.FC<InputProps> = ({ placeholder, type, name, value, onChange, error }) => {
  return (
    <div className="mb-5 w-full">
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        id={name}
        className="mt-2 h-[45px] w-full px-3 py-2 border border-red bg-background rounded-md pl-12 placeholder:font-roboto"
      />
      {error && <span className="text-red text-sm">{error}</span>}
    </div>
  );
};

export default Input;
