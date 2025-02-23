import ProfileTitles from "@/components/ProfileTitles";
import ProfilePicture from "@/components/ProfilePicture";
import TabContent from "@/components/tabs/Tabs";
import "./globals.css";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-32">
        <div className="pt-8 sm:pt-12 lg:pt-16">
          <div className="flex flex-col items-center sm:items-start sm:flex-row gap-6 sm:gap-8 lg:gap-12">
            <div className="w-full sm:w-auto flex justify-center lg:pl-12 xl:pl-36 md:pl-10 sm:pl-5">
              <ProfilePicture />
            </div>
            <div className="w-full">
              <ProfileTitles />
            </div>
          </div>
          <div className="mt-8 sm:mt-12 lg:mt-16">
            <TabContent />
          </div>
        </div>
      </div>
    </div>
  );
}
