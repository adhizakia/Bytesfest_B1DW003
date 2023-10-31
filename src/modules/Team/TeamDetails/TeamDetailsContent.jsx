import React from "react";
import { PhotoCarousel } from "../../../components/PhotoCarousel";
import { Link } from "react-router-dom";

export const TeamDetailsContent = () => {
  const photos = [
    "/assets/carousel-team/1.png",
    "/assets/carousel-team/2.png",
    "/assets/carousel-team/3.png",
  ];

  return (
    <div className="px-3 md:px-12 mt-8 w-full">
      <div className="bg-[url('/assets/Abstract_Diagonal_Straight_Lines_Pattern_Background_generated.png')] bg-cover bg-center max-h-[400px] flex items-center w-full border-t-8 border-r-8 border-white rounded-tr-3xl ">
        <img src={"/assets/redbull-car.png"} alt="" className="w-full " />
      </div>

      <div className="mt-5 w-full">
        <div className="flex justify-center items-center">
          <h2 className="mr-1 text-2xl whitespace-nowrap">TECHNICAL DETAIL</h2>
          <hr className="h-2 my-4 bg-white border-0 w-full" />
        </div>
        <div className="flex flex-wrap py-5 gap-8">
          <Link
            className="w-full md:w-[45%] lg:w-[25%]"
            to={"/driver/driverDetails"}
          >
            <div className=" ">
              <img src={"/assets/ver-detail.png"} alt="" className="w-full " />
            </div>
            <div className="border-b-4 border-r-4 rounded-br-3xl  flex items-center py-3 mt-3 text-2xl gap-3">
              <img src="/assets/ver-num.png" alt="" className="w-[12%]" />
              <p>MAX</p>
              <p className="font-bold">VERSTAPPEN</p>
            </div>
          </Link>
          <Link
            className="w-full md:w-[45%] lg:w-[25%]"
            to={"/driver/driverDetails"}
          >
            <div className=" ">
              <img src={"/assets/per-detail.png"} alt="" className="w-full " />
            </div>
            <div className="border-b-4 border-r-4 rounded-br-3xl  flex items-center py-3 mt-3 text-2xl gap-3">
              <img src="/assets/per-num.png" alt="" className="w-[20%]" />
              <p>SERGIO</p>
              <p className="font-bold">PEREZ</p>
            </div>
          </Link>
          <div>
            <table className="text-lg md:text-2xl">
              <tbody className="">
                <tr>
                  <td>Full Team Name</td>
                  <td>Oracle Red Bull Racing</td>
                </tr>
                <tr>
                  <td>Base</td>
                  <td>Milton Keynes, United Kingdom</td>
                </tr>
                <tr>
                  <td>Team Chief</td>
                  <td>Christian Horner</td>
                </tr>
                <tr>
                  <td>Technical Chief</td>
                  <td>Pierre Waché</td>
                </tr>
                <tr>
                  <td>Chassis</td>
                  <td>RB19</td>
                </tr>
                <tr>
                  <td>Power Unit</td>
                  <td>Honda RBPT</td>
                </tr>
                <tr>
                  <td>First Team Entry</td>
                  <td>1997</td>
                </tr>
                <tr>
                  <td className="pr-5">World Championships</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>Highest Race Finish</td>
                  <td>1 (x109)</td>
                </tr>
                <tr>
                  <td>Pole Positions</td>
                  <td>93</td>
                </tr>
                <tr>
                  <td>Fastest Laps</td>
                  <td>94</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="border-t-8 border-r-8 border-b-8 py-6 border-white rounded-tr-3xl rounded-br-3xl w-full">
            <div className="flex items-center w-full">
              <div className="px-5">
                <p className="text-xl">
                  Red Bull were no strangers to F1 - as sponsors - prior to
                  formally entering as a works team in 2004. Nonetheless, the
                  scale of their success over the following decade was
                  staggering. After a first podium in 2006, the team hit their
                  stride in 2009, claiming six victories and second in the
                  constructors&apos; standings. Over the next four seasons they
                  were a tour de force, claiming consecutive title doubles
                  between 2010 and 2013, with Sebastian Vettel emerging as the
                  sport&rsquo;s youngest quadruple champion. Now they are
                  recapturing that glory with an equally exciting talent – one
                  named Max Verstappen&hellip;
                </p>
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
