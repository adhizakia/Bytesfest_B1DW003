import React from "react";

export const TeamDetailsHeader = () => {
  return (
    <div className="lg:pt-12 md:pt-8 pt-12 px-3 md:px-12 w-full">
      <div className="border-t-8 border-r-8 border-b-8 py-6 border-white rounded-tr-3xl rounded-br-3xl">
        <div className="flex flex-wrap md:flex-nowrap items-center w-full">
          <div className="px-5 md:px-0 mb-5 md:mb-0">
            <img src="/assets/redbull-big-logo.png" alt="" />
          </div>
          <div className="px-5">
            <h1 className="text-4xl lg:text-6xl font-ethnocentric">
              RED BULL RACING
            </h1>
            <p className="mt-3">
              2023 FIA FORMULA ONE WORLD CHAMPIONSHIP™ TEAM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
