import React from "react";
import { VideoCard } from "../../components/videoCard";
import { Link } from "react-router-dom";

export const LatestVideo = () => {
  const videoDisplay = [
    {
      category: "SPRINT HIGHLIGHT",
      title: "Sprint Highlight: 2023 Qatar Grand Prix",
      duration: "13:04",
      imgSrc: "/assets/highlight4.png",
    },
    {
      category: "TEAM RADIO",
      title: "Team Radio: 2023 Qatar Grand Prix",
      duration: "22:11",
      imgSrc: "/assets/highlight2.png",
    },
    {
      category: "SPRINT HIGHLIGHT",
      title: "Sprint Highlight: 2023 Qatar Grand Prix",
      duration: "13:04",
      imgSrc: "/assets/highlight1.png",
    },

    {
      category: "",
      title: "Max Verstappen reflects on momentous hat-trick",
      duration: "16:12",
      imgSrc: "/assets/conv1.png",
    },
    {
      category: "",
      title: "Gasly & Ocon: Revving Up Rivalries",
      duration: "22:11",
      imgSrc: "/assets/conv2.png",
    },
    {
      category: "",
      title: "Passion & Precision: Sainz vs. Leclerc",
      duration: "13:04",
      imgSrc: "/assets/conv3.png",
    },
    {
      category: "",
      title: "Jolyon Palmer's Analysis: Lewis loses out in Qatar",
      duration: "16:12",
      imgSrc: "/assets/latest7.png",
    },
    {
      category: "TEAM RADIO",
      title: "2023 Qatar Grand Prix: Alonso loses out to Leclerc",
      duration: "22:11",
      imgSrc: "/assets/latest8.png",
    },
    {
      category: "",
      title: "ONBOARD: Max Verstappen’s 2023 Qatar Grand Prix",
      duration: "13:04",
      imgSrc: "/assets/latest9.png",
    },
  ];

  return (
    <div className="px-3 md:px-12 mt-5 w-full">
      <div className="flex justify-center items-center">
        <h2 className="mr-1 text-2xl whitespace-nowrap font-ethnocentric">
          LATEST VIDEO
        </h2>
        <hr className="h-2 my-4 bg-white border-0 w-full" />
      </div>
      <div className="flex justify-between flex-wrap py-5">
        {videoDisplay.map((video, index) => (
          <Link
            key={`video-${index + 1}`}
            to={"https://youtu.be/meckBwrnZnU?si=IYt0r6azbXsAY0TM"}
            target="_blank"
            className={"max-w-[48%] md:max-w-[30%] mb-5"}
          >
            <VideoCard
              key={`video-${index}`}
              category={video.category}
              title={video.title}
              duration={video.duration}
              imgSrc={video.imgSrc}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
