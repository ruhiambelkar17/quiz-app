import { createBrowserRouter } from "react-router-dom";

// views
import AboutUs from "../views/AboutUs";
import Result from "../views/Result";
import GetById from "../views/GetById";
import FrontEnd from "../views/FrontEnd";
import Home from "../views/Home"
import QuizLayout from "../views/QuizLayout";
import ContactUs from "../views/ContactUs";
import App from "../App";
import SignIn from "../views/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <div>home</div>
      }
    ]
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
    path: "/quiz",
    element: <QuizLayout />,
  },
  {
    path: "/result",
    element: <Result />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/get-by-id/:id",
    element: <GetById />,
  },
]);



export default router;