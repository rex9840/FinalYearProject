import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../auth/LoginPage";
import SignupPage from "../auth/SignupPage";
import App from "../../App";

const router = createBrowserRouter([
      {
        path: "/",
        element: <App />,
      }, {
            path: "/login", element: <LoginPage/>
      },
       {
            path: "/signup", element: <SignupPage/>
      }
]);
    
export default router;