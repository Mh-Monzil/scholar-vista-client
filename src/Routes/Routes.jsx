import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import AllScholarship from "../pages/AllScholarship/AllScholarship";
import ScholarshipDetails from "../pages/ScholarshipDetails/ScholarshipDetails";
import PrivateRoute from "../privateRoute/PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Dashboard from "../layout/Dashboard";
import MyProfile from "../components/Dashboard/UserDashboard/MyProfile";
import MyApplication from "../components/Dashboard/UserDashboard/MyApplication";
import MyReviews from "../components/Dashboard/UserDashboard/MyReviews";
import ApplicationForm from "../components/Form/ApplicationForm";

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
      // {
      //   path: '/application-form/:id',
      //   element: <ApplicationForm />,
      //   loader: ({params}) => fetch(`http://localhost:5000/`)
      // },
    ],
  },

  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      //user routes
      {
        path: 'my-profile',
        element: <MyProfile />
      },
      {
        path: 'my-application',
        element: <MyApplication />
      },
      {
        path: 'my-reviews',
        element: <MyReviews />
      },
    ]
  },
]);
