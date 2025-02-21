import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap, User } from "lucide-react";
import React from "react";

const TabContent = () => {
  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 sm:pt-12 pt-2 pb-8">
      <Tabs defaultValue="about" className="w-full">
        <TabsList className="grid w-full grid-cols-3 h-12">
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
                <h1 className="text-2xl font-bold mb-4">About Me</h1>
                <p className="text-base sm:text-lg">
                  I am a front-end developer with more than three years of
                  experience in building responsive, user-friendly applications
                  using React.js, Next.js, TypeScript, Tailwind CSS, and Redux.
                  I'm highly skilled in delivering high-quality code and enjoy
                  collaborating with teams to drive innovative solutions.
                  Passionate about continuous learning, I'm committed to making
                  a positive impact in every project I work on.
                </p>
              </div>

              <div className="lg:w-1/2 xl:ml-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <ul className="list-disc list-inside space-y-2">
                    <li>React/Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>Redux</li>
                    <li>Ant Design</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>GitHub</li>
                    <li>Git</li>
                  </ul>
                  <ul className="list-disc list-inside space-y-2 -mt-4 sm:mt-0">
                    <li>Lodash</li>
                    <li>Agile</li>
                    <li>i18n</li>
                    <li>ESLint</li>
                    <li>Django</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="experience">
          <div className="mt-10 rounded-lg border-2 border-gray-800 p-6">
            <h1 className="text-2xl font-bold mb-6">Experience</h1>
            <div className="space-y-8">
              <div className="relative pl-6 border-l-2 border-gray-700">
                <h2 className="text-xl font-bold">React/Next.js Developer</h2>
                <p className="text-lg mt-2">Private Company</p>
                <p className="text-base mt-1">3.5 Years</p>
              </div>

              <div className="relative pl-6 border-l-2 border-gray-700">
                <h2 className="text-xl font-bold">React/Next.js Intern</h2>
                <p className="text-lg mt-2">Private Company</p>
                <p className="text-base mt-1">3 Months</p>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="education">
          <div className="mt-10 rounded-lg border-2 border-gray-800 p-6">
            <h1 className="text-2xl font-bold mb-6">Education</h1>
            <div className="relative pl-6 border-l-2 border-gray-700">
              <h2 className="text-xl font-bold">Computer Bachelor</h2>
              <p className="text-lg mt-2">BIHE</p>
              <p className="text-base mt-1">4 Years</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabContent;
