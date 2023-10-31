import { Link } from "react-router-dom";

export const DriverCard = ({
  index,
  points,
  name,
  flag,
  racerImg,
  racerNum,
  className,
}) => {
  const racerName = name.split(" ");

  return (
    <div
      className={`border-t-4 border-r-4 group border-white hover:border-theme-red rounded-tr-2xl pt-3 pr-3 max-w-[800px] my-3 ${className}`}
    >
      <div className="flex justify-between">
        <div className="h-full">
          <p className="text-5xl">{index}</p>
        </div>
        <div>
          <p className="text-xl font-bold">{points}</p>
          <p className="bg-white text-black px-1 rounded-md">PTS</p>
        </div>
      </div>
      <hr className="h-0.5 my-2 bg-white border-0 group-hover:bg-theme-red" />
      <div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className=" ">{racerName[0].toUpperCase()}</h3>
            <h3 className="text-2xl font-bold">{racerName[1].toUpperCase()}</h3>
          </div>

          <img src={flag} alt="" />
        </div>
      </div>
      <hr className="h-0.5 my-2 bg-white border-0 group-hover:bg-theme-red" />

      <div className="bg-[url('/assets/Abstract_Diagonal_Straight_Lines_Pattern_Background_generated.png')] bg-cover bg-center h-[250px] flex items-center justify-center relative">
        <img src={racerImg} alt="" className="h-full " />
        <img src={racerNum} alt="" className="absolute bottom-0 left-0 p-2" />
      </div>
    </div>
  );
};
