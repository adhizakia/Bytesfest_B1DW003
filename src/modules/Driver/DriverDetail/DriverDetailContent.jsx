import React from "react";
import { PhotoCarousel } from "../../../components/PhotoCarousel";

export const DriverDetailContent = () => {
  const photos = [
    "/assets/carousel-driver/1.png",
    "/assets/carousel-driver/2.png",
    "/assets/carousel-driver/3.png",
  ];

  return (
    <div className="px-3 md:px-12 mt-8 w-full">
      <div className="flex flex-wrap md:flex-nowrap gap-10">
        <div className="w-full md:w-[30%]">
          <div className=" ">
            <img src={"/assets/ver-detail.png"} alt="" className="w-full " />
          </div>
          <div className="border-b-4 border-r-4 rounded-br-3xl  flex items-center py-3 mt-3 text-2xl md:text-base lg:text-2xl gap-3">
            <img src="/assets/ver-num.png" alt="" className="w-[12%]" />
            <p>MAX</p>
            <p className="font-bold">VERSTAPPEN</p>
          </div>
        </div>

        <div className="flex flex-col">
          <table className="text-lg md:text-2xl order-2 lg:order-1">
            <tbody className="">
              <tr>
                <td>Team</td>
                <td>Oracle Red Bull Racing</td>
              </tr>
              <tr>
                <td>Country</td>
                <td>Netherlands</td>
              </tr>
              <tr>
                <td>Podiums</td>
                <td>94</td>
              </tr>
              <tr>
                <td>Points</td>
                <td>2477.5</td>
              </tr>
              <tr>
                <td>Grands Prix entered</td>
                <td>181</td>
              </tr>
              <tr>
                <td className="pr-5">World Championships</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Highest Race Finish</td>
                <td>1 (x50)</td>
              </tr>
              <tr>
                <td>Highest grid position</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Date of birth</td>
                <td>30/09/1997</td>
              </tr>
              <tr>
                <td>Place of birth</td>
                <td>Hasselt, Belgium</td>
              </tr>
            </tbody>
          </table>
          <div className="order-1 lg:order-2 flex md:justify-normal justify-center my-3">
            <img src="/assets/ver-helm.png" alt="" />
          </div>
        </div>
      </div>
      <div className="border-t-8 border-r-8 border-b-8 py-6 mt-10 border-white rounded-tr-3xl rounded-br-3xl w-full">
        <div className="flex items-center w-full">
          <div className="px-5 text-xl">
            <p>He’s Max by name, and max by nature.</p>
            <br />
            <p>
              Arriving as Formula 1’s youngest ever competitor at just 17 years
              old, Verstappen pushed his car, his rivals and the sport’s record
              books to the limit. The baby-faced Dutchman with the heart of a
              lion took the Toro Rosso – and then the Red Bull – by the horns
              with his instinctive racing style.
            </p>
            <br />
            <p>
              F1’s youngest points scorer soon became its youngest race winner –
              at the age of 18 years and 228 days – with an opportunistic but
              controlled drive on debut for Red Bull in Barcelona 2016. A true
              wheel-to-wheel racer, another stunning drive in Brazil from the
              back of the pack to the podium on a treacherous wet track kept the
              plaudits coming.{" "}
            </p>
            <br />
            <p>
              Verstappen’s no-holds-barred attitude and hard defending have
              sometimes landed him in hot water with his peers and paymasters.
              But the mistakes that initially marred his potential have given
              way to maturity, while the bravado and energy that make him a
              blockbuster talent have remained – and the victories have kept on
              coming. They culminated in his first F1 drivers’ crown after that
              already legendary, final-round showdown with Lewis Hamilton in
              2021. And he followed that up with a powerhouse title defence in
              2022, winning a record 15 races across the season.
            </p>
            <br />
            <p>
              The son of former F1 driver Jos Verstappen and super-quick karting
              Mum Sophie Kumpen, racing runs through his genes. Despite moving
              out of Dad’s house to live in Monaco, Verstappen remains close to
              his family, and though he’s not afraid to speak his mind, he can
              still be surprisingly shy.
            </p>
            <br />
            <p>
              Having become the Netherlands&rsquo; first world champion aged
              just 24, the expectations for the next generation’s leading light
              are sky high – but with Verstappen there’s a feeling that the
              sky’s the limit.
            </p>
          </div>
        </div>
      </div>
      <div className="py-8">
        <PhotoCarousel photos={photos} />
      </div>
    </div>
  );
};
