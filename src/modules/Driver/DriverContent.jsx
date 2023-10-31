import DriverData from "./DriverData";
import { DriverCard } from "../../components/driverCard";
import { Link } from "react-router-dom";

export const DriverContent = () => {
  const data = DriverData;
  return (
    <div className="px-3 md:px-12  mt-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-5">
      {data.map((item, index) => (
        <Link
          key={`driver-${index}`}
          to={"/driver/driverDetails"}
          className={index < 3 ? "lg:col-span-4" : "lg:col-span-3"}
        >
          <DriverCard
            key={`driver-${index}`}
            index={index + 1}
            points={item.points}
            name={item.name}
            flag={item.flag}
            racerImg={item.racerImg}
            racerNum={item.racerNum}
          />
        </Link>
      ))}
    </div>
  );
};
