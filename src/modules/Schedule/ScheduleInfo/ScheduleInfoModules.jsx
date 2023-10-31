import React from "react";
import { Navbar } from "../../../components/navbar";
import { FooterComponent } from "../../../components/footer";
import { ScheduleInfoHeader } from "./ScheduleInfoHeader";
import { ScheduleInfoContent } from "./ScheduleInfoContent";

export const ScheduleInfoModules = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <div className="bg-theme-gray text-white min-h-screen lg:pt-[10vh] pt-[8vh] w-full">
        <ScheduleInfoHeader />
        <ScheduleInfoContent />
      </div>
      <FooterComponent />
    </div>
  );
};
