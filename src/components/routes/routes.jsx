import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../auth/LoginPage";
import SignupPage from "../auth/SignupPage";
import App from "../../App";
// import Sidebar from "../home/Sidebar";
// import Navbar from "../home/Navbar";
import Dashboard from "../home/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
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
