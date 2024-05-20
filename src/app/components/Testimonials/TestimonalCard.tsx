import Image from "next/image";
import React from "react";

interface TestimonialProps {
  name: string;
  testimonial: string;
  image: string;
}
const TestimonalCard = ({ name, testimonial, image }: TestimonialProps) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center mt-16">
      <Image
        className="rounded-full h-36 w-36"
        width={120}
        height={120}
        alt="Avatar"
        src={image}
      />
      <h4 className="text-2xl font-semibold">{name}</h4>
      <p className="text-center">{testimonial} </p>
    </div>
  );
};

export default TestimonalCard;
