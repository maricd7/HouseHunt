import React from "react";

interface InputProps {
  placeholder: string;
  label: string;
  type: string;
  required: boolean;
}
const Input = ({ label, placeholder, type, required }: InputProps) => {
  return (
    <div className="flex flex-col gap-2 ">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="border border-gray-500 px-4 py-2 rounded-lg"
        required={required}
      />
    </div>
  );
};

export default Input;
