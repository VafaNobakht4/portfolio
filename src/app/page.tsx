import ProfileTitles from "@/components/ProfileTitles";
import ProfilePicture from "@/components/ProfilePicture";
import TabContent from "@/components/tabs/Tabs";

export default function Home() {
  return (
    <div className="w-full">
      <div className="container w-full">
        <div className="flex flex-col md:flex-row gap-x-8 top-32 relative left-12 md:left-48">
          <ProfilePicture />
          <ProfileTitles />
        </div>
        <TabContent />
      </div>
    </div>
  );
}
