import React from "react";

export const DriverHeader = () => {
  return (
    <div className="lg:pt-12 md:pt-8 pt-12 px-3 md:px-12 w-full">
      <div className="border-t-8 border-r-8 border-b-8 py-6 border-white rounded-tr-3xl rounded-br-3xl">
        <div className="flex justify-between items-center w-full">
          <div className="w-full lg:w-2/3">
            <h1 className="text-4xl lg:text-6xl font-ethnocentric">
              F1 DRIVERS 2023
            </h1>
            <p className="mt-3">
              2023 FIA FORMULA ONE WORLD CHAMPIONSHIP™ DRIVERS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
