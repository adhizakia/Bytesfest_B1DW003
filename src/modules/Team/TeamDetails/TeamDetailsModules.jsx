import React from "react";
import { Navbar } from "../../../components/navbar";
import { FooterComponent } from "../../../components/footer";
import { TeamDetailsHeader } from "./TeamDetailsHeader";
import { TeamDetailsContent } from "./TeamDetailsContent";

export const TeamDetailsModules = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <div className="bg-theme-gray text-white min-h-screen lg:pt-[10vh] pt-[8vh] w-full">
        <TeamDetailsHeader />
        <TeamDetailsContent />
      </div>
      <FooterComponent />
    </div>
  );
};
