import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
            index: true,
            element: <Home />,
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        },
      ]
    },
  ]);