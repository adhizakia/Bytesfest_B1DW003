import React from "react";
import { VideoCard } from "../../components/videoCard";
import { Link } from "react-router-dom";

export const Conversation = () => {
  const videoDisplay = [
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
  ];

  return (
    <div className="px-3 md:px-12 mt-5 w-full">
      <div className="flex justify-center items-center">
        <h2 className="mr-1 text-2xl font-ethnocentric">Conversation</h2>
        <hr className="h-2 my-4 bg-white border-0 w-full" />
      </div>
      <div className="flex justify-between flex-wrap py-5">
        {videoDisplay.map((video, index) => (
          <Link
            key={`video-${index + 1}`}
            to={"https://youtu.be/meckBwrnZnU?si=IYt0r6azbXsAY0TM"}
            target="_blank"
            className="md:max-w-[30%] my-3"
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
