import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Layout/Root/Root.jsx";
import Login from "./Login/Login.jsx";
import Register from "./Register/Register.jsx";
import Home from "./Components/Home/Home.jsx";
import AuthProvider from "./Contexts/AuthContext/AuthProvider.jsx";

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
