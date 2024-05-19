"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const AboutUs = () => {
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
      className="bg-blue-100 py-16 px-32 w-full flex gap-32"
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.div className="flex flex-col gap-4" variants={containerVariants}>
        <motion.h2 className="text-5xl font-semibold" variants={itemVariants}>
          About Us
        </motion.h2>
        <motion.p variants={itemVariants}>
          At HouseHunt, we understand that finding the perfect place to call
          home is more than just a transaction; it's about fulfilling dreams,
          creating memories, and building futures. With our cutting-edge real
          estate app, we strive to make the journey to your dream home as
          seamless and enjoyable as possible.
        </motion.p>
        <motion.p variants={itemVariants}>
          What sets HouseHunt apart is our commitment to innovation,
          convenience, and personalized service. Our intuitive app features
          state-of-the-art search functionalities, allowing you to easily filter
          through thousands of listings based on criteria that matter most to
          you - from price range and location to amenities and architectural
          style.
        </motion.p>
        <motion.h2 className="text-2xl font-semibold" variants={itemVariants}>
          With HouseHunt
        </motion.h2>
        <motion.p variants={itemVariants}>
          Your search for the perfect home is not just efficient, it's
          enjoyable. We believe that every house-hunting experience should be
          filled with excitement, anticipation, and endless possibilities. Let
          HouseHunt be your trusted companion as you embark on this exhilarating
          adventure of finding your ideal home.
        </motion.p>
        <motion.p variants={itemVariants}>
          But HouseHunt is more than just a platform for property listings.
          We're dedicated to providing you with valuable insights, expert
          guidance, and unparalleled support throughout your home-buying
          journey. Whether you're a first-time buyer or a seasoned investor, our
          team of experienced real estate professionals is here to help you
          navigate the complexities of the market and make informed decisions.
        </motion.p>
      </motion.div>
      <motion.div className="w-full" variants={itemVariants}>
        <Image
          className="rounded-lg"
          width={800}
          height={800}
          alt="about"
          src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"
        />
      </motion.div>
    </motion.section>
  );
};

export default AboutUs;
