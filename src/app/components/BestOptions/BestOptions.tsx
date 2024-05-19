"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import BestOptionCard from "./BestOptionCard/BestOptionCard";
import BestOptionMain from "./BestOptionCard/BestOptionMain";
import { usePropertiesContext } from "@/app/contexts/PropertiesContext";

const BestOptions = () => {
  const { specialOffer } = usePropertiesContext();
  const controls = useAnimation();
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
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
        staggerChildren: 0.5,
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
      className="bg-white my-16 px-32 w-full"
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.h2 className="text-5xl font-semibold" variants={itemVariants}>
        Best Options
      </motion.h2>
      <motion.div
        className="flex gap-8 mt-8 justify-between"
        variants={itemVariants}
      >
        <BestOptionMain />
        <motion.div
          className="flex flex-col gap-8 w-full"
          variants={containerVariants}
        >
          {specialOffer.slice(0, 3).map((property, index) => (
            <motion.div key={index} variants={itemVariants}>
              <BestOptionCard
                id={property.id}
                name={property.name}
                description={property.description}
                image={property.image}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                address={property.address}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default BestOptions;
