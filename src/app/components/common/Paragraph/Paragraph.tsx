import React from "react";

interface ParagraphProps {
  text: string;
}
const Paragraph = ({ text }: ParagraphProps) => {
  return <p className="text-lg text-gray-500">{text}</p>;
};

export default Paragraph;
