import { Link } from "react-router-dom";
import { TeamCard } from "../../components/teamCard";

export const TeamContent = () => {
  const TeamData = [
    {
      points: "616",
      teamName: "RED BULL RACING",
      teamLogo: "/assets/redbull-logo.png",
      racer: [
        {
          name: "Max Verstappen",
          img: "/assets/ver.png",
        },
        {
          name: "Sergio Perez",
          img: "/assets/per.png",
        },
      ],
      carImg: "/assets/redbull-car.png",
    },
    {
      points: "322",
      teamName: "MERCEDES",
      teamLogo: "/assets/mercedes-logo.png",
      racer: [
        {
          name: "Lewis Hammilton",
          img: "/assets/ham.png",
        },
        {
          name: "George Russel",
          img: "/assets/rus.png",
        },
      ],
      carImg: "/assets/mercedes-car.png",
    },
    {
      points: "311",
      teamName: "FERRARI",
      teamLogo: "/assets/ferrari-logo.png",
      racer: [
        {
          name: "Charles Leclerc",
          img: "/assets/lec.png",
        },
        {
          name: "Carlos Sainz",
          img: "/assets/sai.png",
        },
      ],
      carImg: "/assets/ferrari-car.png",
    },
    {
      points: "256",
      teamName: "ASTON MARTIN",
      teamLogo: "/assets/aston-logo.png",
      racer: [
        {
          name: "Fernando Alonso",
          img: "/assets/alo.png",
        },
        {
          name: "Lance Stroll",
          img: "/assets/str.png",
        },
      ],
      carImg: "/assets/aston-car.png",
    },
    {
      points: "230",
      teamName: "MCLAREN",
      teamLogo: "/assets/mcLaren-logo.png",
      racer: [
        {
          name: "Lando Norris",
          img: "/assets/nor.png",
        },
        {
          name: "Oscar Piastri",
          img: "/assets/pia.png",
        },
      ],
      carImg: "/assets/mcLaren-car.png",
    },
  ];
  return (
    <div className="px-3 md:px-12 mt-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
      {TeamData.map((item, index) => (
        <Link key={`team-${index}`} to={"/team/teamDetails"}>
          <TeamCard
            index={index + 1}
            points={item.points}
            teamName={item.teamName}
            teamLogo={item.teamLogo}
            racer={item.racer}
            carImg={item.carImg}
          />
        </Link>
      ))}
    </div>
  );
};
