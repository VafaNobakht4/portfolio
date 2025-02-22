"use client";
import React from "react";
import { motion } from "framer-motion";
const AboutContent = () => {
  return (
    <motion.div
      className="mt-10 rounded-lg border-2 border-gray-800 p-6"
      initial={{ x: "-100vh", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2">
          <h1 className="text-2xl font-bold mb-4 text-white">About Me</h1>
          <p className="text-base sm:text-lg text-white">
            I am a front-end developer with more than four years of experience
            in building responsive, user-friendly applications using React.js,
            Next.js, TypeScript, Tailwind CSS, and Redux. I'm highly skilled in
            delivering high-quality code and enjoy collaborating with teams to
            drive innovative solutions. Passionate about continuous learning,
            I'm committed to making a positive impact in every project I work
            on.
          </p>
        </div>
        <div className="lg:w-1/2 lg:ml-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ul className="list-disc list-inside space-y-2">
              <li className="text-white">React js</li>
              <li className="text-white">Next js</li>
              <li className="text-white">TypeScript</li>
              <li className="text-white">Tailwind CSS</li>
              <li className="text-white">Redux</li>
              <li className="text-white">Ant Design</li>
              <li className="text-white">HTML</li>
              <li className="text-white">CSS</li>
              <li className="text-white">JavaScript</li>
              <li className="text-white">GitHub</li>
            </ul>
            <ul className="list-disc list-inside space-y-2 -mt-4 sm:mt-0">
              <li className="text-white">Git</li>
              <li className="text-white">Lodash</li>
              <li className="text-white">Agile</li>
              <li className="text-white">Scrum</li>
              <li className="text-white">i18n</li>
              <li className="text-white">ESLint</li>
              <li className="text-white">Framer Motion</li>
              <li className="text-white">Shadcn</li>
              <li className="text-white">MUI</li>
              <li className="text-white">Django</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutContent;
