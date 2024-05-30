"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import BestOptionCard from "./BestOptionCard/BestOptionCard";
import { usePropertiesContext } from "@/app/contexts/PropertiesContext";
import { CtaButton } from "../common";
import { useRouter } from "next/navigation";

const BestOptions = () => {
  const { specialOffer } = usePropertiesContext();
  const controls = useAnimation();
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);
  const router = useRouter();

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
      className="bg-white px-32 w-full relative z-40 py-16 flex flex-col gap-4 justify-center items-center"
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
        <motion.div
          className="grid grid-cols-2 gap-8 w-full"
          variants={containerVariants}
        >
          {specialOffer.slice(0, 4).map((property, index) => (
            <motion.div key={index} variants={itemVariants}>
              <BestOptionCard
                id={property.id}
                name={property.name}
                description={property.description}
                image={property.image}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                address={property.address}
                property_type={property.property_type}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <CtaButton
        text="View All"
        type="button"
        onClick={() => router.push("/listings")}
      />
    </motion.section>
  );
};

export default BestOptions;
