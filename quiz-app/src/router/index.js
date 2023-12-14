import { createBrowserRouter } from "react-router-dom";

// views
import AboutUs from "../views/AboutUs";
import GetById from "../views/GetById";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },

  {
    path: "/about-us",
    element: <AboutUs />,
  },

  {
    path: "/get-by-id/:id",
    element: <GetById />,
  },
]);



export default router;