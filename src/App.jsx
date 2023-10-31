import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { VideoPage } from "./pages/VideoPage";
import { SchedulePage } from "./pages/SchedulePage";
import { TeamPage } from "./pages/TeamPage";
import { DriverPage } from "./pages/DriverPage";
import { TeamDetailsPage } from "./pages/TeamDetailsPage";
import { DriverDetailPage } from "./pages/DriverDetailPage";
import { ScheduleInfoPage } from "./pages/ScheduleInfoPage";
import { ScheduleFinishedInfoPage } from "./pages/ScheduleFinishedInfoPage";

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/video",
        element: <VideoPage />,
      },
      {
        path: "/schedule",
        element: <SchedulePage />,
      },
      {
        path: "/team",
        element: <TeamPage />,
      },
      {
        path: "/driver",
        element: <DriverPage />,
      },
      {
        path: "/team/teamDetails",
        element: <TeamDetailsPage />,
      },
      {
        path: "/driver/driverDetails",
        element: <DriverDetailPage />,
      },
      {
        path: "/schedule/scheduleInfo",
        element: <ScheduleInfoPage />,
      },
      {
        path: "/schedule/scheduleFinishedInfo",
        element: <ScheduleFinishedInfoPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
