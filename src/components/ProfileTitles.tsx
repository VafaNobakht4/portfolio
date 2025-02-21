import React from "react";
import ProfileButtons from "./ProfileButtons";

const ProfileTitles = () => {
  return (
    <div className="flex flex-col gap-y-2 md:w-full w-2/3 mt-6 ml-10">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
        Vafa Nobakht
      </h1>
      <h1 className="text-2xl md:text-4xl font-medium mb-4 text-[#cfcaca]">
        Midlevel Frontend Developer
      </h1>
      <h1 className="text-xl md:text-2xl font-medium mb-4 lg:w-2/3 xl:w-1/2 text-[#cfcaca]">
        Front End Developer | React.js & Next.js Specialist with more than 4
        years.
      </h1>
      <ProfileButtons />
    </div>
  );
};

export default ProfileTitles;
