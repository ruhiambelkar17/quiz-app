import { createBrowserRouter } from "react-router-dom";

// views
import AboutUs from "../views/AboutUs";
import GetById from "../views/GetById";
import FrontEnd from "../views/FrontEnd";
import Home from "../views/Home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/front-end-development",
    element: <FrontEnd />,
  },

  {
    path: "/get-by-id/:id",
    element: <GetById />,
  },
]);



export default router;