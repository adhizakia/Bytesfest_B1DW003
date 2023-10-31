import { Link } from "react-router-dom";
import { ScheduleCard } from "../../components/scheduleCard";
import ScheduleData from "./ScheduleData";

export const ScheduleContent = () => {
  const data = ScheduleData;
  return (
    <div className="px-3 md:px-12 mt-8 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {data.map((item, index) => (
        <Link
          key={`schedule-${index}`}
          to={"/schedule/scheduleFinishedInfo"}
          className="flex justify-center"
        >
          <ScheduleCard
            key={(`schedule-`, index)}
            date={item.date}
            raceName={item.raceName}
            country={item.country}
            flag={item.flag}
            month={item.month}
            racer={item.racer}
          />
        </Link>
      ))}
    </div>
  );
};
