"use client";
import React from "react";
import { motion } from "framer-motion";

const EducationContent = () => {
  return (
    <motion.div
      className="mt-10 rounded-lg border-2 border-gray-800 p-6"
      initial={{ x: "-100vh", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-8 text-white">Education</h1>
      <div className="relative pl-6 border-l-2 border-gray-700">
        <h2 className="text-2xl font-bold text-white">
          Bachelor of Computer Engineering
        </h2>
        <p className="text-lg mt-2 text-general-2">BIHE</p>
        <p className="text-base mt-1 text-general-2">5 Years</p>
      </div>
    </motion.div>
  );
};

export default EducationContent;
