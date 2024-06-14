"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { CtaButton } from "../common";
import { useRouter } from "next/navigation";
import { useClientDataContext } from "@/app/contexts/ClientDataContext";
import Cookies from "js-cookie";
import { HeroCard } from "../HeroCard";
import { BestOptions } from "../BestOptions";
import Image from "next/image";

const Hero = () => {
  const controls = useAnimation();
  const router = useRouter();
  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    });
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 1.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  return (
    <motion.section
      className="h-screen flex  items-center gap-16 bg-gray-100 px-32"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="gap-8 flex flex-col w-3/5 z-40"
        variants={containerVariants}
      >
        <motion.div className="flex flex-col gap-4" variants={itemVariants}>
          <h1 className="text-6xl font-semibold text-gray-950 ">
            Find Your Perfect <span className="text-blue-700">Home:</span>{" "}
            Discover Houses, Apartments, and More!
          </h1>
          <p className="text-lg text-gray-500">
            Easily search and explore a wide range of properties to find the
            perfect home that fits your lifestyle and budget. Whether you're
            looking for a cozy apartment, a spacious house, or a luxurious
            condo, our user-friendly app has everything you need to make your
            dream home a reality.
          </p>
        </motion.div>
        <motion.div variants={itemVariants} className="flex gap-8">
          <CtaButton
            type="button"
            onClick={() => router.push("/signup")}
            text="Sign Up"
          />
          <CtaButton
            type="button"
            onClick={() => router.push("/signup")}
            text="Sign In"
          />
        </motion.div>
      </motion.div>
      <div className="border border-gray-400 bg-white rounded-l-full overflow-hidden shadow-md hover:shadow-lg">
        <Image src="/real-estate.jpg" height={600} width={600} alt="Hero" />
      </div>
    </motion.section>
  );
};

export default Hero;
