"use client";
import React, { useEffect, useRef, useState } from "react";
import TestimonalCard from "./TestimonalCard";
import supabase from "@/app/supabase";

interface Testimonial {
  id: number;
  customer_name: string;
  testimonial: string;
  image: string;
}

const Testimonials = () => {
  const sectionRef = useRef(null);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    // Fetch testimonials
    const fetchTestimonials = async () => {
      try {
        const { data, error } = await supabase.from("testimonials").select("*");
        if (error) {
          throw error;
        }
        setTestimonials(data);
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
      }
    };

    // Fetch testimonials on mount
    fetchTestimonials();
  }, []);

  return (
    <section
      className="bg-white my-16 px-32 w-full relative z-40"
      ref={sectionRef}
    >
      <h2 className="text-5xl font-semibold z-40 relative text-center">
        What our Customers Say About Us
      </h2>
      <div className="flex gap-32 z-40 relative py-10">
        {testimonials.map((testi, index) => (
          <div key={index}>
            <TestimonalCard
              name={testi.customer_name}
              testimonial={testi.testimonial}
              image={testi.image}
            />
          </div>
        ))}
      </div>
      <div className="w-96 h-96 rounded-full bg-sky-100 absolute bottom-0 right-0 z-10"></div>
    </section>
  );
};

export default Testimonials;
