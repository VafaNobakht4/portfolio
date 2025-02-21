import React from "react";
import { Button } from "./ui/button";
import { Download, Github, Linkedin } from "lucide-react";

const ProfileButtons = () => {
  return (
    <div className="flex flex-row gap-x-4">
      <Button
        className="w-48 h-12 text-lg text-white font-semibold mt-2 bg-black border border-white hover:bg-[#1c1c1c] hover:text-white"
        variant="outline"
      >
        <Download className="mr-2 !h-5 !w-5 font-semibold" /> Download CV
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="text-white mt-2.5 ml-2 hover:bg-[#1c1c1c] hover:text-white"
      >
        <Github className="!h-6 !w-6 !mt-3.5" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="text-white mt-3 ml-2 hover:bg-[#1c1c1c] hover:text-white"
      >
        <Linkedin className="!h-6 !w-6 !mt-3.5" />
      </Button>
    </div>
  );
};

export default ProfileButtons;
