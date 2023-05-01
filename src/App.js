import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import Signup from "./pages/auth/Signup";
import { useSelector } from "react-redux";
import "./App.css";
import Signin from "./pages/auth/Signin";
import Dashboard from "./pages/app/Dashboard";

function App() {
  const currentUser = useSelector((state) => state.auth.currentUser);
  console.log(currentUser);
  const router = createBrowserRouter([
    {
      path: "/",
      element: currentUser ? <Dashboard /> : <Navigate to="/signin" />,
    },
    {
      path: "/folder/:folderId",
      element: currentUser ? <Dashboard /> : <Navigate to="/signin" />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/signin",
      element: <Signin />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
