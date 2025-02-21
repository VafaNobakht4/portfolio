import React from "react";
import { Button } from "./ui/button";
import { Download, Github, Linkedin } from "lucide-react";
import Link from "next/link";

const ProfileButtons = () => {
  return (
    <div className="flex flex-row gap-x-4">
      <Link href="./VafaNobakht_Resume.pdf" download="Vafa_Nobakht_CV.pdf">
        <Button
          className="w-48 h-12 text-lg text-white font-semibold mt-2 bg-black border border-white hover:hover:bg-general-1 hover:text-white"
          variant="outline"
        >
          <Download className="mr-2 !h-5 !w-5 font-semibold" /> Download CV
        </Button>
      </Link>
      <Link
        href="https://github.com/VafaNobakht4/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="ghost"
          size="icon"
          className="text-white mt-2.5 ml-2 hover:bg-general-1 hover:text-white"
        >
          <Github className="!h-6 !w-6 !mt-3.5" />
        </Button>
      </Link>
      <Link
        href="https://www.linkedin.com/in/vafa-nobakht/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="ghost"
          size="icon"
          className="text-white mt-3 ml-2 hover:bg-general-1 hover:text-white"
        >
          <Linkedin className="!h-6 !w-6 !mt-3.5" />
        </Button>
      </Link>
    </div>
  );
};

export default ProfileButtons;
