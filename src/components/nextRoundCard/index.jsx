export const NextRoundCard = ({ date, month, country, flag, raceName }) => {
  return (
    <div className="border-t-4 border-r-4 group border-white hover:border-theme-red rounded-tr-2xl pt-3 pr-3 max-w-[350px] my-3">
      <div className="flex justify-between">
        <div>
          <p className="text-2xl">{date}</p>
          <p className="bg-white text-black px-2 rounded-md">{month}</p>
        </div>
        <div className="h-full">
          <img src={flag} alt="" className="h-full" />
        </div>
      </div>
      <hr className="h-0.5 my-4 bg-white border-0 group-hover:bg-theme-red" />
      <div>
        <div className="flex items-center">
          <h3 className="text-3xl font-ethnocentric">{country}</h3>
          <img src="/assets/arrow-right.png" alt="" />
        </div>
        <p>{raceName}</p>
      </div>
      <hr className="h-0.5 my-4 bg-white border-0 group-hover:bg-theme-red" />
      <div className="relative flex justify-center">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/white-grid.png')] bg-cover bg-center opacity-50 "></div>
        <img
          src="/assets/YAS MARINAS LAYOUT.png"
          alt=""
          className="w-1/2 p-2"
        />
      </div>
    </div>
  );
};
