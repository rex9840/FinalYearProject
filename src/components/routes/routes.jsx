import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginPage from "../auth/LoginPage";
import App from "../../App";
// import Sidebar from "../home/Sidebar";
// import Navbar from "../home/Navbar";
import Dashboard from "../dashboard/Dashboard";
import Events from "../events/Events";
import SignupHomepage from "../auth/SignupHomepage";
import SignupPage from "../auth/SignupPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignupHomepage />,
  },

  {
    path: "/admin",
    element: <AdminHomepage />,
    children: [
      {
        path: "/admin/dashboard",
        element: <AdminDashboard />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupHomepage />,
  },
  {
    path: "/signup/student",
    element: <SignupPage role="student" />,
  },
  {
    path: "/signup/admin",
    element: <SignupPage role="admin" />,
  },
  {
    path: "/signup/teacher",
    element: <SignupPage role="teacher" />,
  },
]);

export default router;
