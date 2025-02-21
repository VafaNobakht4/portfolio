import React from "react";

const ExperienceContent = () => {
  return (
    <div className="mt-10 rounded-lg border-2 border-gray-800 p-6">
      <h1 className="text-2xl font-bold mb-6 text-white">Experience</h1>
      <div className="space-y-8">
        <div className="relative pl-6 border-l-2 border-gray-700">
          <h2 className="text-xl font-bold text-white">
            React/Next.js Developer
          </h2>
          <p className="text-lg mt-2 text-white">Private Company</p>
          <p className="text-base mt-1 text-white">3.5 Years</p>
        </div>

        <div className="relative pl-6 border-l-2 border-gray-700">
          <h2 className="text-xl font-bold text-white">React js Intern</h2>
          <p className="text-lg mt-2 text-white">Private Company</p>
          <p className="text-base mt-1 text-white">3 Months</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceContent;
