import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../auth/LoginPage";
import SignupPage from "../auth/SignupPage";
import App from "../../App";
// import Sidebar from "../home/Sidebar";
// import Navbar from "../home/Navbar";
import Dashboard from "../dashboard/Dashboard";
import Events from "../events/Events";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/events",
        element: <Events />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
]);

export default router;
