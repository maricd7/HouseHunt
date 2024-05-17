import React from "react";

interface CtaButtonProps {
  text: string;
}
const CtaButton = ({ text }: CtaButtonProps) => {
  return (
    <button className="py-4 px-8 bg-blue-700 w-fit rounded-full text-white hover:bg-blue-900">
      {text}
    </button>
  );
};

export default CtaButton;
