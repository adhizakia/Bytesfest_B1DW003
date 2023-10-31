import React from "react";
import { VideoCard } from "../../components/videoCard";
import { Link } from "react-router-dom";

export const VideoHighlight = () => {
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
  ];
  return (
    <div className="lg:pt-12 md:pt-8 pt-12 px-3 md:px-12 w-full">
      <fieldset className="border-t-8 border-r-8 border-white rounded-tr-2xl">
        <legend className="pr-1 text-white text-4xl font-ethnocentric">
          VIDEO
        </legend>
        <div className="flex justify-center items-center mt-3">
          <h2 className="mr-1 text-2xl font-ethnocentric">Highlight</h2>
          <hr className="h-2 my-4 bg-white border-0 w-full" />
        </div>
        <div className="flex flex-col justify-between md:flex-row py-5 mr-5">
          <div className="md:w-[50%] flex-grow">
            <Link
              to={"https://youtu.be/meckBwrnZnU?si=IYt0r6azbXsAY0TM"}
              target="_blank"
            >
              <VideoCard
                category={videoDisplay[0].category}
                title={videoDisplay[0].title}
                duration={videoDisplay[0].duration}
                imgSrc={videoDisplay[0].imgSrc}
                className="w-full h-full"
              />
            </Link>
          </div>
          <div className="md:w-[30%] md:pl-4 flex justify-between flex-col">
            {videoDisplay.slice(1).map((video, index) => (
              <Link
                key={`video-${index + 1}`}
                to={"https://youtu.be/meckBwrnZnU?si=IYt0r6azbXsAY0TM"}
                target="_blank"
              >
                <VideoCard
                  category={video.category}
                  title={video.title}
                  duration={video.duration}
                  imgSrc={video.imgSrc}
                  className="w-full "
                />
              </Link>
            ))}
          </div>
        </div>
      </fieldset>
    </div>
  );
};
