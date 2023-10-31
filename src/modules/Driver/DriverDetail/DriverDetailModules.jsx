import React from "react";
import { FooterComponent } from "../../../components/footer";
import { Navbar } from "../../../components/navbar";
import { DriverDetailContent } from "./DriverDetailContent";
import { DriverDetailsHeader } from "./DriverDetailHeader";

export const DriverDetailModules = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <div className="bg-theme-gray text-white min-h-screen lg:pt-[10vh] pt-[8vh] w-full">
        <DriverDetailsHeader />
        <DriverDetailContent />
      </div>
      <FooterComponent />
    </div>
  );
};
