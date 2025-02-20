import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap, User } from "lucide-react";
import React from "react";

const TabContent = () => {
  return (
    <div className="flex md:justify-center md:items-center w-full relative md:left-48 top-48">
      <Tabs className="w-2/3 md:w-full" defaultValue="about">
        <TabsList className="grid w-full grid-cols-3 justify-center h-12">
          <TabsTrigger className="h-10" defaultValue="about" value="about">
            <User className="mr-2 h-4 w-4" /> About
          </TabsTrigger>
          <TabsTrigger className="h-10" value="experience">
            <Briefcase className="mr-2 h-4 w-4" /> Experience
          </TabsTrigger>
          <TabsTrigger className="h-10" value="education">
            <GraduationCap className="mr-2 h-4 w-4" /> Education
          </TabsTrigger>
        </TabsList>
        <TabsContent value="about">
          <div className="w-full rounded-lg border-gray-800 border-2 md:h-48 h-auto mt-12">
            <div className="flex flex-row gap-x-4">
              <div className="flex flex-col gap-y-2 w-1/2 ml-4 mt-4">
                <h1 className="text-2xl font-bold">About Me</h1>
                <span className="font-medium">
                  I am a front-end developer with more than three years of
                  experience in building responsive, user-friendly applications
                  using React.js, Next.js, TypeScript, Tailwind CSS, and Redux.
                  I’m highly skilled in delivering high-quality code and enjoy
                  collaborating with teams to drive innovative solutions.
                  Passionate about continuous learning, I’m committed to making
                  a positive impact in every project I work on.
                </span>
              </div>
              <div className="grid grid-cols-3 mt-8 ml-10">
                <div>
                  <ul className="list-disc">
                    <li>React/Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>Redux</li>
                    <li>Ant Desing</li>
                  </ul>
                </div>
                <div className="ml-14">
                  <ul className="list-disc">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Github</li>
                    <li>Github</li>
                  </ul>
                </div>
                <div className="ml-28">
                  <ul className="list-disc">
                    <li>Lodash</li>
                    <li>Agile</li>
                    <li>I18n</li>
                    <li>Eslint</li>
                    <li>Django</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>{" "}
        </TabsContent>
        <TabsContent value="experience">
          <div className="w-full rounded-lg border-gray-800 border-2 md:h-80 h-auto mt-12">
            <div className="mt-4 ml-4">
              <h1 className="text-2xl font-bold">Experience</h1>
              <div className="border-l-2 border-gray-700 h-24 mt-6 space-y-2">
                <h2 className="text-xl font-bold ml-3">
                  React/Next js Developer
                </h2>
                <span className="text-lg font-medium ml-3">
                  Private Company
                </span>
                <h2 className="text-base font-medium ml-3">3.5 Years</h2>
              </div>
              <div className="border-l-2 border-gray-700 h-24 mt-8 space-y-2">
                <h2 className="text-xl font-bold ml-3">React/Next js Intern</h2>
                <span className="text-lg font-medium ml-3">
                  Private Company
                </span>{" "}
                <h2 className="text-base font-medium ml-3">3 Month</h2>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="education">
          <div className="w-full rounded-lg border-gray-800 border-2 md:h-48 h-auto mt-12">
            <div className="mt-4 ml-4">
              <h1 className="text-2xl font-bold">Education</h1>
              <div className="border-l-2 border-gray-700 h-24 mt-6 space-y-2">
                <h2 className="text-xl font-bold ml-3">Computer Bachlor</h2>
                <span className="text-lg font-medium ml-3">BIHE</span>
                <h2 className="text-base font-medium ml-3">4 Years</h2>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabContent;
