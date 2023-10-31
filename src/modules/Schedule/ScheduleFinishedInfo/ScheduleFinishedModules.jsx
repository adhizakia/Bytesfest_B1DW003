import React from "react";
import { Navbar } from "../../../components/navbar";
import { FooterComponent } from "../../../components/footer";
import { ScheduleFinishedInfoHeader } from "./ScheduleFinishedInfoHeader";
import { ScheduleFinishedInfoContent } from "./ScheduleFinishedInfoContent";

export const ScheduleFinishedModules = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <div className="bg-theme-gray text-white min-h-screen lg:pt-[10vh] pt-[8vh] w-full">
        <ScheduleFinishedInfoHeader />
        <ScheduleFinishedInfoContent />
      </div>
      <FooterComponent />
    </div>
  );
};
