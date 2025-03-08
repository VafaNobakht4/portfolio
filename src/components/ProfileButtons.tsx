"use client";
import React from "react";
import { Button } from "./ui/button";
import { Download, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
const ProfileButtons = () => {
  return (
    <motion.div
      className="flex items-center gap-4 -ml-5 sm:ml-0"
      initial={{ x: "100vh", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Button
        asChild
        className="py-6 text-lg text-white font-semibold bg-black border border-white hover:hover:bg-general-1 hover:text-white"
        variant="outline"
      >
        <Link
          href="./VafaNobakht-Resume.pdf"
          download="Vafa_Nobakht_CV.pdf"
          target="_blank"
        >
          <Download className="mr-2 !h-5 !w-5 font-semibold" /> Download CV
        </Link>
      </Button>

      <Button
        asChild
        variant="ghost"
        className="text-white py-6 hover:bg-general-1 hover:text-white"
      >
        <Link
          href="https://github.com/VafaNobakht4/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="!h-6 !w-6" />
        </Link>
      </Button>

      <Button
        variant="ghost"
        className="text-white py-6 hover:bg-general-1 hover:text-white"
      >
        <Link
          href="https://www.linkedin.com/in/vafa-nobakht/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="!h-6 !w-6 " />
        </Link>
      </Button>
    </motion.div>
  );
};

export default ProfileButtons;
