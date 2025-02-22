"use client";
import React from "react";
import ProfileButtons from "./ProfileButtons";
import { motion } from "framer-motion";

const ProfileTitles = () => {
  return (
    <motion.div
      className="flex flex-col gap-y-2 md:w-full w-3/4 mt-6 ml-10"
      initial={{ x: "100vh", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
        Vafa Nobakht
      </h1>
      <h1 className="text-2xl md:text-4xl font-medium mb-4 text-general-2">
        Midlevel Frontend Developer
      </h1>
      <h1 className="text-xl md:text-2xl font-medium mb-4 lg:w-3/4 xl:w-2/3 text-general-2">
        Front End Developer | React.js & Next.js Specialist with more than 4
        years.
      </h1>
      <h1 className="text-lg md:text-xl font-medium mb-4 text-general-2">
        Vafa.nobakht4@gmail.com
      </h1>
      <ProfileButtons />
    </motion.div>
  );
};

export default ProfileTitles;
