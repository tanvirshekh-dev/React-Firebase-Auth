import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Layout/Root/Root.jsx";
import Login from "./Login/Login.jsx";
import Register from "./Register/Register.jsx";
import Home from "./Components/Home/Home.jsx";
import AuthProvider from "./Contexts/AuthContext/AuthProvider.jsx";
import Orders from "./Components/Orders/Orders.jsx";
import PrivateRouter from "./Components/Router/PrivateRouter.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/orders",
        element: <PrivateRouter>
          <Orders></Orders>
        </PrivateRouter>
      },
      {
        path: "/profile",
        element: <PrivateRouter>
          <Profile></Profile>
        </PrivateRouter>
      },
      {
        path: "/dashboard",
        element: <PrivateRouter>
          <Dashboard></Dashboard>
        </PrivateRouter>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider >
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
