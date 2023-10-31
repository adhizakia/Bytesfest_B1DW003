import React from "react";
import { VideoCard } from "../../components/videoCard";
import { Link } from "react-router-dom";

export const HighLight = () => {
  const videoDisplay = [
    {
      category: "SPRINT HIGHLIGHT",
      title: "Sprint Highlight: 2023 Qatar Grand Prix",
      duration: "13:04",
      imgSrc: "/assets/highlight1.png",
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
      imgSrc: "/assets/highlight3.png",
    },
  ];
  return (
    <div className="px-3 md:px-12  mt-5 w-full">
      <div className="flex justify-center items-center">
        <h2 className="mr-1 text-2xl font-ethnocentric">Highlight</h2>
        <hr className="h-2 my-4 bg-white border-0 w-full" />
      </div>
      <div className="flex justify-between flex-wrap md:py-5">
        {videoDisplay.map((video, index) => (
          <Link
            to={"https://youtu.be/meckBwrnZnU?si=IYt0r6azbXsAY0TM"}
            target="_blank"
            className={"max-w-[100%] md:max-w-[30%] py-3"}
            key={`video-${index}`}
          >
            <VideoCard
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
