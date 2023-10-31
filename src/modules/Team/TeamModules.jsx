import React from "react";
import { Navbar } from "../../components/navbar";
import { FooterComponent } from "../../components/footer";
import { TeamHeader } from "./TeamHeader";
import { TeamContent } from "./TeamContent";

export const TeamModules = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <div className="bg-theme-gray text-white min-h-screen lg:pt-[10vh] pt-[8vh] w-full">
        <TeamHeader />
        <TeamContent />
      </div>
      <FooterComponent />
    </div>
  );
};
