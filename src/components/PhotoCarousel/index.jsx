import { useState } from "react";

export const PhotoCarousel = ({ photos }) => {
  const photosData = photos;
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const prevPhoto = () => {
    setCurrentPhoto(
      (prevPhoto) => (prevPhoto - 1 + photosData.length) % photosData.length
    );
  };

  const nextPhoto = () => {
    setCurrentPhoto((prevPhoto) => (prevPhoto + 1) % photosData.length);
  };

  return (
    <div className="w-full bg-[url('/assets/Abstract_Diagonal_Straight_Lines_Pattern_Background_generated.png')] bg-cover bg-center">
      <div className="relative w-full">
        <img
          src={photosData[currentPhoto]}
          alt="photo-carousel"
          className="w-[75%] h-auto mx-auto"
        />
        <div className="absolute top-1/2 transform -translate-y-1/2 left-0 flex items-center justify-between w-full">
          <div
            onClick={prevPhoto}
            className="bg-black bg-opacity-50 p-1 md:p-2 text-white hover:bg-opacity-75 transition duration-300 cursor-pointer"
          >
            <img src="/assets/arrow-left.png" alt="" className="rotate-180" />
          </div>
          <div
            onClick={nextPhoto}
            className="bg-black bg-opacity-50 p-1 md:p-2 text-white hover-bg-opacity-75 transition duration-300 cursor-pointer"
          >
            <img src="/assets/arrow-left.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
