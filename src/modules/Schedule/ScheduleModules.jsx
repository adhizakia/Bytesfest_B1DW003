import React from "react";
import { Navbar } from "../../components/navbar";
import { FooterComponent } from "../../components/footer";
import { ScheduleHeader } from "./ScheduleHeader";
import { ScheduleContent } from "./ScheduleContent";
import { NextRound } from "../Home/NextRound";
import { NextRoundList } from "./NextRoundList";
import { Link } from "react-router-dom";

export const ScheduleModules = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <div className="bg-theme-gray text-white min-h-screen lg:pt-[10vh] pt-[8vh] w-full">
        <ScheduleHeader />
        <ScheduleContent />
        <Link to={"/schedule/scheduleInfo"}>
          <NextRound />
        </Link>
        <NextRoundList />
      </div>
      <FooterComponent />
    </div>
  );
};
