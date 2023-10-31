import React from "react";

export const ScheduleInfoHeader = () => {
  return (
    <div className="lg:pt-12 md:pt-8 pt-12 px-3 md:px-12 w-full">
      <div className="border-t-8 border-r-8 border-b-8 py-6 border-white rounded-tr-3xl rounded-br-3xl">
        <div className="flex items-center flex-wrap md:flex-nowrap justify-between w-full">
          <div className="px-5">
            <h1 className="text-4xl lg:text-6xl font-ethnocentric">
              ABU DHABI
            </h1>
            <p className="mt-3">
              FORMULA 1 ETIHAD AIRWAYS ABU DHABI GRAND PRIX 2023
            </p>
          </div>
          <p className="text-4xl lg:text-6xl font-ethnocentric mr-10 px-5 md:px-0">
            2023
          </p>
        </div>
      </div>
    </div>
  );
};
