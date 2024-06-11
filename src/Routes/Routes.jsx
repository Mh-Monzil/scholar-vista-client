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
import EditApplicationForm from "../components/Form/EditApplicationForm";
import ManageScholarship from "../components/Dashboard/ModeratorDashboard/ManageScholarship";
import AllReviews from "../components/Dashboard/ModeratorDashboard/AllReviews";
import AllAppliedScholarship from "../components/Dashboard/ModeratorDashboard/AllAppliedScholarship";
import AddScholarship from "../components/Dashboard/ModeratorDashboard/AddScholarship";

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
        // loader: ({params}) => fetch(`/scholarship-details/${params.id}`)
      },
      {
        path: '/application-form/:id',
        element: <ApplicationForm />,
        loader: ({params}) => fetch(`http://localhost:5000/scholarship-details/${params.id}`)
      },
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
      {
        path: 'my-application/edit-application/:id',
        element: <EditApplicationForm />,
        loader: ({params}) => fetch(`http://localhost:5000/applied-scholarships/${params.id}`)
      },
      {
        path: 'manage-scholarships',
        element: <ManageScholarship />
      },
      {
        path: 'all-reviews',
        element: <AllReviews />
      },
      {
        path: 'all-applied-scholarship',
        element: <AllAppliedScholarship />
      },
      {
        path: 'add-scholarship',
        element: <AddScholarship />
      },
    ]
  },
]);
