import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap, User } from "lucide-react";
import React from "react";
import EducationContent from "./EducationContent";
import ExperienceContent from "./ExperienceContent";
import AboutContent from "./AboutContent";

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
          <AboutContent />
        </TabsContent>
        <TabsContent value="experience">
          <ExperienceContent />
        </TabsContent>
        <TabsContent value="education">
          <EducationContent />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabContent;
