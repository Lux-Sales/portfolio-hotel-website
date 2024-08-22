import Topbar from "@/components/Topbar";
import Contact from "@/pages/Contact";
import Facilities from "@/pages/Facilities";
import Home from "@/pages/Home";
import Rooms from "@/pages/Rooms";
import { Outlet } from "react-router-dom";

const routesConfig = [
  {
    path: "/",
    element: (
      <>
        <Topbar />
        <Outlet />
      </>
    ),
    errorElement: <Home />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/facilities", element: <Facilities /> },
      { path: "/rooms", element: <Rooms /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
];

export default routesConfig;
