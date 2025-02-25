"use client";
import React from "react";
import { motion } from "framer-motion";

const ExperienceContent = () => {
  return (
    <motion.div
      className="mt-10 rounded-lg border-2 border-gray-800 p-6"
      initial={{ x: "-100vh", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-8 text-white">Experience</h1>
      <div className="space-y-8">
        <div className="relative pl-6 border-l-2 border-gray-700">
          <h2 className="text-2xl font-bold text-white">
            React/Next.js Developer
          </h2>
          <p className="text-lg mt-2 text-general-2">Private Company</p>
          <p className="text-base mt-1 text-general-2">3.5 Years</p>
        </div>

        <div className="relative pl-6 border-l-2 border-gray-700">
          <h2 className="text-2xl font-bold text-white">React js Intern</h2>
          <p className="text-lg mt-2 text-general-2">Private Company</p>
          <p className="text-base mt-1 text-general-2">3 Months</p>
        </div>
        <div className="relative pl-6 border-l-2 border-gray-700">
          <h2 className="text-2xl font-bold text-white">Mathematic Teacher</h2>
          <p className="text-lg mt-2 text-general-2">Self Employee</p>
          <p className="text-base mt-1 text-general-2">2.5 Years</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceContent;
