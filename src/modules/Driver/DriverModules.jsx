import React from "react";
import { Navbar } from "../../components/navbar";
import { FooterComponent } from "../../components/footer";
import { DriverHeader } from "./DriverHeader";
import { DriverContent } from "./DriverContent";

export const DriverModules = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <div className="bg-theme-gray text-white min-h-screen lg:pt-[10vh] pt-[8vh] w-full">
        <DriverHeader />
        <DriverContent />
      </div>
      <FooterComponent />
    </div>
  );
};
