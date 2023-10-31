import React from "react";

export const Features = () => {
  return (
    <div className="px-3 md:px-12 mt-5 w-full bg-white text-black">
      <div className="flex md:flex-nowrap flex-wrap py-10 md:gap-14 items-center">
        <img
          src="/assets/F8AaaccWsAAvNPC.png"
          alt=""
          className=" w-full md:w-[55vw]"
        />
        <div>
          <h3 className="text-5xl font-ethnocentric mb-4">
            Unlock the inside world of F1
          </h3>
          <p className="text-xl mb-4">
            With F1 Unlocked, get exclusive insider stories. Discover the latest
            action on and off the track, take a peek behind-the-scenes and
            dissect post-race analysis.
          </p>
          <a
            className="border border-theme-red rounded-md hover:bg-theme-red hover:text-white px-3 py-2 font-bold inline-flex items-center group"
            href="#signup"
          >
            Unlock F1 for free
            <img
              src="/assets/arrow-down.svg"
              alt=""
              className="ml-2 group-hover:hidden block"
            />
            <img
              src="/assets/arrow-down-white.png"
              alt=""
              className="ml-2 group-hover:block hidden"
            />
          </a>
        </div>
      </div>
      <div className="flex md:flex-nowrap flex-wrap md:py-10 pb-5 md:gap-14 items-center">
        <div>
          <h3 className="text-5xl font-ethnocentric mb-4">
            Unlock every detail
          </h3>
          <p className="text-xl mb-4">
            Immerse yourself into every racing detail with free Live Timing
            data. Track your favourites with a live leader board, sector
            performance and eavesdrop on teams with radio snippets.
          </p>
          <a
            className="border border-theme-red rounded-md hover:bg-theme-red hover:text-white px-3 py-2 font-bold inline-flex items-center group"
            href="#signup"
          >
            Unlock F1 for free
            <img
              src="/assets/arrow-down.svg"
              alt=""
              className="ml-2 group-hover:hidden block"
            />
            <img
              src="/assets/arrow-down-white.png"
              alt=""
              className="ml-2 group-hover:block hidden"
            />
          </a>
        </div>
        <img
          src="/assets/a708x-437p7.jpg"
          alt=""
          className=" w-full md:w-[55vw] mt-5 md:mt-0"
        />
      </div>
    </div>
  );
};
