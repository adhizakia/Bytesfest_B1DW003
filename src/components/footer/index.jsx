import React from "react";

export const FooterComponent = () => {
  return (
    <div>
      <div className="bg-theme-gray py-1 md:flex items-center justify-between text-white px-3 md:px-12 ">
        <div className="flex items-center my-3 md:my-0 md:justify-normal justify-between gap-4 w-full">
          <p className="text-sm">
            DOWNLOAD THE
            <br /> RACERSEDGE APP
          </p>
          <img
            src="/assets/5a902db97f96951c82922874.png"
            alt=""
            className="w-[20vw] md:w-[8vw]"
          />
          <img
            src="/assets/5a902dbf7f96951c82922875.png"
            alt=""
            className="w-[25vw] md:w-[11vw]"
          />
        </div>
        <div className="flex w-[60%] justify-center md:justify-end gap-2 md:mx-0  mx-auto py-3 md:py-0">
          <div className="border-2 rounded-lg border-theme-black p-1">
            <img src="/assets/instagram.svg" alt="" />
          </div>
          <div className="border-2 rounded-lg border-theme-black p-1">
            <img src="/assets/twitter.svg" alt="" />
          </div>
          <div className="border-2 rounded-lg border-theme-black p-1">
            <img src="/assets/youtube.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="bg-theme-black md:py-24 py-10 flex-col text-white flex justify-center items-center">
        <img
          src="/assets/Logo merah.png"
          alt=""
          className="md:max-w-[10vw] max-w-[30vw] mb-7"
        />
        <div className="flex md:w-[40vw] w-[80vw] justify-between items-center">
          <p>Home</p>
          <p>Video</p>
          <p>Driver</p>
          <p>Schedule</p>
          <p>Team</p>
        </div>
      </div>
      <div className="bg-theme-gray py-1 text-white text-center">
        <p>© RacersEdge 2023</p>
      </div>
    </div>
  );
};
