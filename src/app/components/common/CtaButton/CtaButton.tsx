import React from "react";

interface CtaButtonProps {
  text: string;
  onClick: () => void | undefined | Promise<void>;
  type: "submit" | "button" | undefined;
}
const CtaButton = ({ text, type, onClick }: CtaButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="py-4 px-8 bg-blue-700 min-w-64 w-fit rounded-lg text-white hover:bg-blue-900"
    >
      {text}
    </button>
  );
};

export default CtaButton;
