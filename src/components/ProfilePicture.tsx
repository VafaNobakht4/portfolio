"use client";
import Image from "next/image";
import React from "react";
import profilePic from "../assets/pic1.jpg";
import { motion } from "framer-motion";
const ProfilePicture = () => {
  return (
    <motion.div
      className="h-80 w-1/3 flex flex-col items-center justify-center mt-6"
      initial={{ x: "100vh", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-80 h-80">
        <Image
          alt="Profile"
          src={profilePic}
          className="!object-cover !rounded-full"
          layout="fill"
        />
      </div>
    </motion.div>
  );
};

export default ProfilePicture;
