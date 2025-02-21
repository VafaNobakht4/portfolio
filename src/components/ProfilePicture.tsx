import Image from "next/image";
import React from "react";
import profilePic from "../assets/pic1.jpg";

const ProfilePicture = () => {
  return (
    <div className="h-80 w-1/3 flex flex-col items-center justify-center mt-6">
      <div className="relative w-80 h-80">
        <Image
          alt="Profile"
          src={profilePic}
          className="!object-cover !rounded-full"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default ProfilePicture;
