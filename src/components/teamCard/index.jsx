export const TeamCard = ({
  index,
  points,
  teamName,
  teamLogo,
  racer,
  carImg,
}) => {
  return (
    <div className="border-t-4 border-r-4 group border-white hover:border-theme-red rounded-tr-2xl pt-3 pr-3 max-w-[800px] my-3">
      <div className="flex justify-between">
        <div className="h-full">
          <p className="text-5xl">{index}</p>
        </div>
        <div>
          <p className="text-xl font-bold">{points}</p>
          <p className="bg-white text-black px-1 rounded-md">PTS</p>
        </div>
      </div>
      <hr className="h-0.5 my-4 bg-white border-0 group-hover:bg-theme-red" />
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-3xl font-ethnocentric">{teamName}</h3>
          <img src={teamLogo} alt="" />
        </div>
      </div>
      <hr className="h-0.5 mt-4 mb-2 bg-white border-0 group-hover:bg-theme-red" />
      <div className="flex md:flex-nowrap flex-wrap">
        {racer.map((item, index) => {
          const racerName = item.name.split(" ");
          return (
            <div
              key={index}
              className="border-b-2 border-r-2 rounded-br-lg text-center  group-hover:border-theme-red px-3 justify-between w-full"
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex gap-2">
                  <p className="text-2xl">{racerName[0].toUpperCase()}</p>
                  <p className="text-2xl font-bold">
                    {racerName[1].toUpperCase()}
                  </p>
                </div>

                <img src={item.img} alt={item.name} className="w-[20%]" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-[url('/assets/Abstract_Diagonal_Straight_Lines_Pattern_Background_generated.png')] bg-cover bg-center min-h-[250px] flex items-center">
        <img src={carImg} alt="" className="w-full " />
      </div>
    </div>
  );
};
