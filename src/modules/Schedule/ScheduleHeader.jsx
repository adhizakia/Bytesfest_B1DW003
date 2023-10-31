import React from "react";

export const ScheduleHeader = () => {
  return (
    <div className="lg:pt-12 md:pt-8 pt-12 px-3 md:px-12 w-full">
      <div className="border-t-8 border-r-8 border-b-8 py-6 border-white rounded-tr-3xl rounded-br-3xl">
        <div className="md:flex justify-between items-center w-full">
          <div className="w-full md:w-2/3 mb-5 md:mb-0">
            <h1 className="text-4xl lg:text-6xl font-ethnocentric">
              F1 Schedule 2023
            </h1>
            <p className="mt-3">
              2023 FIA FORMULA ONE WORLD CHAMPIONSHIP™ RACE CALENDAR
            </p>
          </div>
          <a href="#next-round" className="w-[95%] md:w-1/3">
            <div
              className="bg-cover bg-center flex justify-between rounded-xl mr-1"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(/assets/Abstract_Diagonal_Straight_Lines_Pattern_Background_generated.png) ",
              }}
            >
              <div className=" py-3 px-6">
                <p className="text-lg text-theme-red font-bold">NEXT ROUND</p>
                <p className="text-2xl text-black font-ethnocentric">
                  ABU DHABI
                </p>
                <p className="text-2xl text-black font-ethnocentric">2023</p>
              </div>

              <div className="bg-theme-red rounded-r-xl p-8 flex justify-center items-center">
                <img src="/assets/arrow-header.png" alt="" className="w-full" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
