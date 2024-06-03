import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import AllScholarship from "../pages/AllScholarship/AllScholarship";
import ScholarshipDetails from "../pages/ScholarshipDetails/ScholarshipDetails";
import PrivateRoute from "../privateRoute/PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/all-scholarship",
        element: <AllScholarship />,
      },
      {
        path: "/scholarship-details/:id",
        element: (
          <PrivateRoute>
            <ScholarshipDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
