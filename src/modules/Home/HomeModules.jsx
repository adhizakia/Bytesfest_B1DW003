import { FooterComponent } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { Features } from "./Features";
import { HighLight } from "./HighLight";
import { NextRound } from "./NextRound";
import { SignUp } from "./SignUp";
import { Unlock } from "./Unlock";

export const HomeModules = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <div className="bg-theme-gray text-white min-h-screen lg:pt-[10vh] pt-[8vh] w-full">
        <NextRound />
        <HighLight />
        <Features />
        <Unlock />
        <SignUp />
      </div>
      <FooterComponent />
    </div>
  );
};
