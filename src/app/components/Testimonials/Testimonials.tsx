"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import TestimonalCard from "./TestimonalCard";

const Testimonials = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.section
      className="bg-white my-16 px-32 w-full relative z-40"
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.h2
        className="text-5xl font-semibold z-40 relative text-center"
        variants={itemVariants}
      >
        What our Customers Say About Us
      </motion.h2>
      <motion.div
        className="flex gap-32 z-40 relative py-10"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <TestimonalCard />
        </motion.div>
        <motion.div variants={itemVariants}>
          <TestimonalCard />
        </motion.div>
        <motion.div variants={itemVariants}>
          <TestimonalCard />
        </motion.div>
      </motion.div>
      <motion.div
        className="w-96 h-96 rounded-full bg-sky-100 absolute bottom-0 right-0 z-10"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>
    </motion.section>
  );
};

export default Testimonials;
