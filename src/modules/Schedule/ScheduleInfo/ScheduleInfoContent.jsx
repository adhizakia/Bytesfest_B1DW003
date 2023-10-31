export const ScheduleInfoContent = () => {
  const displaySchedule = [
    {
      event: "PRACTICE 1",
      day: "FRIDAY",
      date: "24 NOV",
      time: "13.30 - 14.30",
    },
    {
      event: "PRACTICE 2",
      day: "FRIDAY",
      date: "24 NOV",

      time: "17.00 - 18.00",
    },
    {
      event: "PRACTICE 3",
      day: "SATURDAY",
      date: "25 NOV",
      time: "15.30 - 16.30",
    },
    {
      event: "QUALIFYING",
      day: "SATURDAY",
      date: "25 NOV",
      time: "18.00 - 19.00",
    },
    {
      event: "RACE",
      day: "SUNDAY",
      date: "26 NOV",
      time: "17.00",
    },
  ];
  return (
    <div className="px-3 md:px-12 mt-8 w-full">
      <fieldset className="border-t-8 border-r-8 border-white rounded-tr-xl pr-3">
        <legend className="pr-1 text-white text-2xl">24-26 NOV</legend>
        <img
          src="/assets/wp11898437-yas-marina-wallpapers.jpg"
          alt=""
          className="h-[300px] w-full object-cover rounded-xl"
        />
      </fieldset>
      <div className="mt-5">
        <div className="flex justify-center items-center">
          <h2 className="mr-1 text-2xl">SCHEDULE</h2>
          <hr className="h-2 my-4 bg-white border-0 w-full" />
        </div>
        <div className="flex flex-wrap md:flex-nowrap justify-between">
          <div className="rounded-xl p-3 w-full md:w-[70%] flex">
            <div className="flex flex-col justify-center align-middle w-full text-lg">
              {displaySchedule.map((schedule, index) => (
                <div
                  key={(`schedule`, index)}
                  className="my-1 flex flex-wrap md:flex-nowrap justify-between bg-white text-black rounded-xl px-5 py-3"
                >
                  <div className="min-w-[100px]">
                    <p className="font-black">{schedule.date}</p>
                    <p>{schedule.day}</p>
                  </div>
                  <div className="flex justify-center items-center ">
                    <p className="font-ethnocentric">{schedule.event}</p>
                  </div>
                  <div className=" text-white bg-theme-gray rounded-lg px-2 min-w-full md:min-w-[200px] flex justify-center items-center">
                    <p className="">{schedule.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-[27%] w-full">
            <hr className="h-2 my-4 bg-white border-0 w-full " />
            <p className="mr-1 text-2xl text-center">YAS MARINA CIRCUIT</p>
            <hr className="h-2 my-4 bg-white border-0 w-full" />
            <div className="relative flex justify-center">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/white-grid.png')] bg-cover bg-center opacity-50 "></div>
              <img
                src="/assets/YAS MARINAS LAYOUT.png"
                alt=""
                className="w-1/2 p-2"
              />
            </div>
            <div className="bg-white text-black px-3 py-2 mt-2 rounded-xl font-bold">
              <div className="flex justify-between">
                <p>Length</p>
                <p>5.281 km</p>
              </div>
              <div className="flex justify-between">
                <p>Longest straight</p>
                <p>1.14 km</p>
              </div>
              <div className="flex justify-between">
                <p>Elevation change</p>
                <p>10.7 m</p>
              </div>
              <div className="flex justify-between">
                <p>Seating Capacity</p>
                <p>60,000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-8 border-r-8 border-b-8 py-6 mt-5 border-white rounded-tr-3xl rounded-br-3xl w-full">
          <div className="flex items-center w-full">
            <div className="px-5">
              <p className="text-xl">
                Get up to speed with everything you need to know about the 2023
                Abu Dhabi Grand Prix, which takes place over 58 laps of the
                5.281-kilometre Yas Marina Circuit on Yas Island on Sunday,
                November 26.
                <br /> <br />
                Using the links above you can find the full weekend schedule,
                including details of practice and qualifying sessions, support
                races, press conferences and special events, plus the latest
                news headlines, circuit information and F1 race results.
                <br /> <br />
                You can also find broadcast information, with details of how and
                where you can watch the race on TV, or download the 2023 Abu
                Dhabi Grand Prix schedule to your mobile device.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
