export const VideoCard = ({ category, title, duration, imgSrc, className }) => {
  const categoryWords = category.split(" ");
  return (
    <div
      className={`rounded-full flex flex-col justify-between group ${className}`}
    >
      <div className="relative">
        <div className="text-3xl absolute w-full text-right font-black p-1">
          <h2 className="text-theme-red drop-shadow-xl">{categoryWords[0]}</h2>
          <h2 className="drop-shadow-xl">{categoryWords[1]}</h2>
        </div>
        <img src={imgSrc} alt="" className=" w-full" />
        <img
          src={"/assets/play-icon.png"}
          alt=""
          className="absolute bottom-0"
        />
      </div>
      <div className="border-b-4 border-r-4 border-white group-hover:border-theme-red rounded-ee-lg mt-1 px-4 py-1">
        <p>{duration}</p>
        <p>{title}</p>
      </div>
    </div>
  );
};
