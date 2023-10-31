import React from "react";
import { Navbar } from "../../components/navbar";

export const NextRound = () => {
  const displaySchedule = [
    {
      event: "PRACTICE 1",
      day: "FRI",
      time: "13.30 - 14.30",
    },
    {
      event: "PRACTICE 2",
      day: "FRI",
      time: "17.00 - 18.00",
    },
    {
      event: "PRACTICE 3",
      day: "SAT",
      time: "15.30 - 16.30",
    },
    {
      event: "QUALIFYING",
      day: "SAT",
      time: "18.00 - 19.00",
    },
    {
      event: "RACE",
      day: "SUN",
      time: "17.00",
    },
  ];
  return (
    <div
      className="lg:pt-12 md:pt-8 pt-12 px-3 md:px-12  w-full"
      id="next-round"
    >
      <fieldset className="border-t-8 border-r-8 border-theme-red rounded-tr-xl">
        <legend className="pr-1 text-theme-red text-2xl font-ethnocentric">
          NEXT ROUND
        </legend>
        <div className="pr-4 py-2 flex md:flex-row flex-col gap-5">
          <div className="w-full md:w-1/4">
            <div className="w-fit">
              <p className="text-xl">24-26</p>
              <p className="bg-white rounded-lg text-theme-gray p-0.5  text-center text-md">
                Nov
              </p>
            </div>

            <hr className="h-0.5 my-4 bg-white border-0" />
            <div className="flex justify-between items-center">
              <p className="text-2xl font-ethnocentric">ABU DHABI</p>
              <img src="/assets/arrow-right.png" alt="" />
            </div>
            <p>FORMULA 1 ETIHAD AIRWAYS ABU DHABI GRAND PRIX 2023</p>
            <hr className="h-0.5 my-4 bg-white border-0" />
            <div className="relative flex justify-center">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/white-grid.png')] bg-cover bg-center opacity-50 "></div>
              <img
                src="/assets/YAS MARINAS LAYOUT.png"
                alt=""
                className="w-1/2 p-2"
              />
            </div>
          </div>
          <div className="w-full rounded-xl bg-[url('/assets/wp11898437-yas-marina-wallpapers.jpg')] bg-cover bg-center flex justify-end items-center py-14 px-8 ">
            <div className="bg-theme-gray rounded-xl p-3 w-full lg:w-[35%] h-fit">
              <table className="flex flex-col w-full text-sm">
                {displaySchedule.map((schedule, index) => (
                  <tr
                    key={(`schedule`, index)}
                    className="my-1 flex justify-between"
                  >
                    <td className="min-w-[100px] ">{schedule.event}</td>
                    <td className="text-center">{schedule.day}</td>
                    <td className=" text-theme-gray min-w-[105px]">
                      <p className="bg-white px-2 py-1 flex justify-center  rounded-md">
                        {schedule.time}
                      </p>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
};
