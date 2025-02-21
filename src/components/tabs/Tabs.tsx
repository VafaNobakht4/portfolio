import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap, User } from "lucide-react";
import React from "react";

const TabContent = () => {
  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 sm:pt-6 pt-2 pb-8">
      <Tabs defaultValue="about" className="w-full">
        <TabsList className="grid w-full grid-cols-3 h-12 bg-[#1c1a1a] text-white opacity-100">
          <TabsTrigger
            value="about"
            className="flex items-center justify-center space-x-2 h-10"
          >
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">About</span>
          </TabsTrigger>
          <TabsTrigger
            value="experience"
            className="flex items-center justify-center space-x-2 h-10"
          >
            <Briefcase className="h-4 w-4" />
            <span className="hidden sm:inline">Experience</span>
          </TabsTrigger>
          <TabsTrigger
            value="education"
            className="flex items-center justify-center space-x-2 h-10"
          >
            <GraduationCap className="h-4 w-4" />
            <span className="hidden sm:inline">Education</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="about">
          <div className="mt-10 rounded-lg border-2 border-gray-800 p-6">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/2">
                <h1 className="text-2xl font-bold mb-4 text-white">About Me</h1>
                <p className="text-base sm:text-lg text-white">
                  I am a front-end developer with more than three years of
                  experience in building responsive, user-friendly applications
                  using React.js, Next.js, TypeScript, Tailwind CSS, and Redux.
                  I'm highly skilled in delivering high-quality code and enjoy
                  collaborating with teams to drive innovative solutions.
                  Passionate about continuous learning, I'm committed to making
                  a positive impact in every project I work on.
                </p>
              </div>

              <div className="lg:w-1/2 lg:ml-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <ul className="list-disc list-inside space-y-2">
                    <li className="text-white">React/Next.js</li>
                    <li className="text-white">TypeScript</li>
                    <li className="text-white">Tailwind CSS</li>
                    <li className="text-white">Redux</li>
                    <li className="text-white">Ant Design</li>
                    <li className="text-white">HTML</li>
                    <li className="text-white">CSS</li>
                    <li className="text-white">JavaScript</li>
                    <li className="text-white">GitHub</li>
                    <li className="text-white">Git</li>
                  </ul>
                  <ul className="list-disc list-inside space-y-2 -mt-4 sm:mt-0">
                    <li className="text-white">Lodash</li>
                    <li className="text-white">Agile</li>
                    <li className="text-white">i18n</li>
                    <li className="text-white">ESLint</li>
                    <li className="text-white">Django</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="experience">
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
                <h2 className="text-xl font-bold text-white">
                  React/Next.js Intern
                </h2>
                <p className="text-lg mt-2 text-white">Private Company</p>
                <p className="text-base mt-1 text-white">3 Months</p>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="education">
          <div className="mt-10 rounded-lg border-2 border-gray-800 p-6">
            <h1 className="text-2xl font-bold mb-6 text-white">Education</h1>
            <div className="relative pl-6 border-l-2 border-gray-700">
              <h2 className="text-xl font-bold text-white">
                Computer Bachelor
              </h2>
              <p className="text-lg mt-2 text-white">BIHE</p>
              <p className="text-base mt-1 text-white">4 Years</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabContent;
