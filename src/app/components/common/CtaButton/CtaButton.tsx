import React from "react";

interface CtaButtonProps {
  text: string;
  onClick: () => void;
}
const CtaButton = ({ text, onClick }: CtaButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="py-4 px-8 bg-blue-700 w-full rounded-full text-white hover:bg-blue-900"
    >
      {text}
    </button>
  );
};

export default CtaButton;
