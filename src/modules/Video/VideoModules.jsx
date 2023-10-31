import { FooterComponent } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { Conversation } from "./Conversation";
import { LatestVideo } from "./LatestVideo";
import { VideoHighlight } from "./VideoHighlight";

export const VideoModules = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <div className="bg-theme-gray text-white min-h-screen lg:pt-[10vh] pt-[8vh] w-full">
        <VideoHighlight />
        <Conversation />
        <LatestVideo />
      </div>
      <FooterComponent />
    </div>
  );
};
