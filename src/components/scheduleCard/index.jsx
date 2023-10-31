export const ScheduleCard = ({
  date,
  month,
  country,
  flag,
  raceName,
  racer,
}) => {
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
      <div className="flex items-end">
        <div className="w-[30%]">
          <div className="relative h-32 ">
            <img
              src="/assets/aw7sl-0sq36.jpg"
              alt=""
              className="w-full absolute bottom-0 h-3/4 rounded-t-xl object-cover object-center"
            />
            <img
              src={racer[0].img}
              alt=""
              className="w-full absolute bottom-0 "
            />
          </div>
          <div className="border-b-2 border-r-2 rounded-br-lg text-center font-bold">
            <p>{racer[0].name}</p>
          </div>
        </div>

        <div className="w-[40%] mx-2">
          <div className="relative h-40 ">
            <img
              src="/assets/aw7sl-0sq36.jpg"
              alt=""
              className="w-full absolute bottom-0 h-4/5 rounded-t-xl object-cover object-center"
            />
            <img
              src={racer[1].img}
              alt=""
              className="w-full absolute bottom-0 "
            />
          </div>
          <div className="border-b-2 border-r-2 rounded-br-lg text-center font-bold">
            <p>{racer[1].name}</p>
          </div>
        </div>

        <div className="w-[30%]">
          <div className="relative h-32 ">
            <img
              src="/assets/aw7sl-0sq36.jpg"
              alt=""
              className="w-full absolute bottom-0 h-3/4 rounded-t-xl object-cover object-center"
            />
            <img
              src={racer[2].img}
              alt=""
              className="w-full absolute bottom-0 "
            />
          </div>
          <div className="border-b-2 border-r-2 rounded-br-lg text-center font-bold">
            <p>{racer[2].name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
