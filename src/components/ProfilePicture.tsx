import Image from "next/image";
import React from "react";
import profilePic from "../assets/10.jpg";

const ProfilePicture = () => {
  return (
    <div className="h-64 w-1/3 flex flex-col items-center justify-center">
      <div className="relative w-64 h-64">
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
