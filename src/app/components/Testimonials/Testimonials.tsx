import React from "react";
import TestimonalCard from "./TestimonalCard";

const Testimonials = () => {
  return (
    <section className="bg-white my-16 px-32 w-full relative z-40">
      <h2 className="text-5xl font-semibold z-40 relative text-centers">
        What our Customers Say About Us
      </h2>
      <div className="flex gap-32 z-40 relative">
        <TestimonalCard />
        <TestimonalCard />
        <TestimonalCard />
      </div>
      <div className="w-96 h-96 rounded-full bg-sky-100 absolute bottom-0 right-0 z-10"></div>
    </section>
  );
};

export default Testimonials;
