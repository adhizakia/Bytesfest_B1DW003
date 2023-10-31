import React from "react";
import { PhotoCarousel } from "../../../components/PhotoCarousel";

export const ScheduleFinishedInfoContent = () => {
  const photos = [
    "/assets/carousel-schedule/1.png",
    "/assets/carousel-schedule/2.png",
    "/assets/carousel-schedule/3.png",
  ];

  return (
    <div className="px-3 md:px-12 mt-8 w-full">
      <fieldset className="border-t-8 border-r-8 border-white rounded-tr-xl pr-3">
        <legend className="pr-1 text-white text-2xl">18-20 AUG</legend>
        <img
          src="/assets/japan-circuit.png"
          alt=""
          className="h-[300px] w-full object-cover rounded-xl"
        />
      </fieldset>
      <div className="mt-5">
        <div className="flex justify-center items-center">
          <h2 className="mr-1 text-2xl">RESULT</h2>
          <hr className="h-2 my-4 bg-white border-0 w-full" />
        </div>
        <div className="flex justify-between flex-wrap lg:flex-nowrap">
          <div className="flex items-end justify-between w-full lg:w-[70%] gap-5">
            <div className="w-[30%]">
              <div className="relative h-[150px] md:h-[250px] ">
                <img
                  src="/assets/aw7sl-0sq36.jpg"
                  alt=""
                  className="w-full absolute bottom-0 h-3/4 rounded-t-xl object-cover object-center"
                />
                <img
                  src={"/assets/nor.png"}
                  alt=""
                  className="w-full absolute bottom-0 "
                />
              </div>
              <div className="border-b-4 border-r-4 rounded-br-2xl text-2xl text-center font-bold py-3">
                <p>NOR</p>
              </div>
            </div>

            <div className="w-[40%] mx-2">
              <div className="relative h-[150px] md:h-[350px] lg:h-[460px] ">
                <img
                  src="/assets/aw7sl-0sq36.jpg"
                  alt=""
                  className="w-full absolute bottom-0 h-4/5 rounded-t-xl object-cover object-center"
                />
                <img
                  src={"/assets/ver.png"}
                  alt=""
                  className="w-full absolute bottom-0 "
                />
              </div>
              <div className="border-b-4 border-r-4 rounded-br-2xl text-2xl text-center font-bold py-3">
                <p>VER</p>
              </div>
            </div>

            <div className="w-[30%]">
              <div className="relative  h-[150px] md:h-[250px]">
                <img
                  src="/assets/aw7sl-0sq36.jpg"
                  alt=""
                  className="w-full absolute bottom-0 h-3/4 rounded-t-xl object-cover object-center"
                />
                <img
                  src={"/assets/pia.png"}
                  className="w-full absolute bottom-0 "
                />
              </div>
              <div className="border-b-4 border-r-4 rounded-br-2xl text-2xl text-center font-bold py-3">
                <p>PIA</p>
              </div>
            </div>
          </div>
          <div className="lg:w-[27%] w-full">
            <hr className="h-2 my-4 bg-white border-0 w-full " />
            <p className="mr-1 text-2xl text-center">SUZUKA CIRCUIT</p>
            <hr className="h-2 my-4 bg-white border-0 w-full" />
            <div className="relative flex justify-center">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/white-grid.png')] bg-cover bg-center opacity-50 "></div>
              <img
                src="/assets/suzuka-layout.png"
                alt=""
                className="w-1/2 p-2"
              />
            </div>
            <div className="bg-white text-black px-3 py-2 mt-2 rounded-xl font-bold">
              <div className="flex justify-between">
                <p>Length</p>
                <p>5.807 km</p>
              </div>
              <div className="flex justify-between">
                <p>Longest straight</p>
                <p>1.2 km</p>
              </div>
              <div className="flex justify-between">
                <p>Elevation change</p>
                <p>40.4 m</p>
              </div>
              <div className="flex justify-between">
                <p>Seating Capacity</p>
                <p>155.000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap mt-5 justify-between">
          <div className="border-t-4 border-r-4 border-b-4 py-6  border-white rounded-tr-3xl rounded-br-3xl w-full lg:w-[70%]">
            <div className="flex items-center w-full">
              <div className="px-3">
                <p className="text-xl">
                  Get up to speed with everything you need to know about the
                  2023 Japanese Grand Prix, which takes place over 53 laps of
                  the 5.807-kilometre Suzuka International Racing Course on
                  Sunday, September 24.
                </p>
              </div>
            </div>
          </div>
          <div className="p-3 flex flex-col justify-between h-full lg:w-[27%] w-full gap-3">
            <div className="flex justify-between text-xl gap-3">
              <div className="flex gap-2 md:w-[250px]">
                <p>MAX</p>
                <p className="font-bold">VERSTAPPEN</p>
              </div>
              <div className="bg-white text-black px-4 font-bold w-[150px] flex justify-center">
                <p>1:30:58.421</p>
              </div>
            </div>
            <div className="flex justify-between text-xl gap-3">
              <div className="flex gap-2 md:w-[250px]">
                <p>LANDO</p>
                <p className="font-bold">NORRIS</p>
              </div>
              <div className="bg-white text-black px-4 font-bold w-[150px] flex justify-center">
                <p>+19.387</p>
              </div>
            </div>
            <div className="flex justify-between text-xl gap-3">
              <div className="flex gap-2 md:w-[250px]">
                <p>OSCAR</p>
                <p className="font-bold">PIASTRI</p>
              </div>
              <div className="bg-white text-black px-4 font-bold w-[150px] flex justify-center">
                <p>+36.494</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8">
        <PhotoCarousel photos={photos} />
      </div>
    </div>
  );
};
