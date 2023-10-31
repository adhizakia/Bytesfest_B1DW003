import React from "react";

export const Unlock = () => {
  return (
    <div className="px-3 md:px-12 py-5 w-full">
      <h2 className="text-center text-xl mb-5 font-ethnocentric">
        Unlocking Soon
      </h2>
      <div className="flex flex-wrap justify-between">
        <div className="bg-[url('/assets/unlocked1.png')] w-full lg:w-[45vw] p-5 my-3 lg:my-0 relative min-h-[250px]">
          <div
            className="rounded-r-xl min-h-[250px] border-t-4 border-r-4 border-white  bg-cover bg-center p-8 "
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/assets/Abstract_Diagonal_Straight_Lines_Pattern_Background_generated.png) ",
            }}
          >
            <h4 className="text-2xl font-bold mb-3">
              Unlock exclusive at-track prizes
            </h4>
            <p>
              Attending the Grand Prix? Only with F1 Unlocked can you be in the
              with the chance to unlock surprise and delight upgrades.
            </p>
          </div>
        </div>
        <div className="bg-[url('/assets/unlocked2.png')] w-full lg:w-[45vw] p-5 relative min-h-[250px]">
          <div
            className="rounded-r-xl min-h-[250px] border-t-4 border-r-4 border-white  bg-cover bg-center p-8 "
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/assets/Abstract_Diagonal_Straight_Lines_Pattern_Background_generated.png) ",
            }}
          >
            <h4 className="text-2xl font-bold mb-3">Unlock Your Invites</h4>
            <p>
              Save your seat. Unlock virtual fan events. Access unbelievable
              experience. Join the fandom
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
