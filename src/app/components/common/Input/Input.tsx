import React, { RefObject } from "react";

interface InputProps {
  placeholder: string;
  label: string;
  type: string;
  required: boolean;
  reference: React.RefObject<HTMLInputElement>;
}
const Input = ({
  label,
  placeholder,
  type,
  required,
  reference,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-2 max-w-96">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="border border-gray-500 px-4 py-2 rounded-lg"
        required={required}
        ref={reference}
      />
    </div>
  );
};

export default Input;
