import { Link } from "react-router-dom";
import { NextRoundCard } from "../../components/nextRoundCard";

export const NextRoundList = () => {
  const nextRound = [
    {
      date: "15-17",
      month: "DEC",
      flag: "/assets/usa-flag.png",
      country: "UNITED STATES",
      raceName: "FORMULA 1 LENOVO UNITED STATES GRAND PRIX 2023",
    },
    {
      date: "15-17",
      month: "DEC",
      flag: "/assets/usa-flag.png",
      country: "UNITED STATES",
      raceName: "FORMULA 1 LENOVO UNITED STATES GRAND PRIX 2023",
    },
    {
      date: "15-17",
      month: "DEC",
      flag: "/assets/usa-flag.png",
      country: "UNITED STATES",
      raceName: "FORMULA 1 LENOVO UNITED STATES GRAND PRIX 2023",
    },
    {
      date: "15-17",
      month: "DEC",
      flag: "/assets/usa-flag.png",
      country: "UNITED STATES",
      raceName: "FORMULA 1 LENOVO UNITED STATES GRAND PRIX 2023",
    },
  ];
  return (
    <div className="px-12 mt-5 pb-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {nextRound.map((item, index) => (
        <Link
          key={`schedule-${index}`}
          to={"/schedule/scheduleInfo"}
          className="flex justify-center"
        >
          <NextRoundCard
            date={item.date}
            month={item.month}
            flag={item.flag}
            country={item.country}
            raceName={item.raceName}
          />
        </Link>
      ))}
    </div>
  );
};
