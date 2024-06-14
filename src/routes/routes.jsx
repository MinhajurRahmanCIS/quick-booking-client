import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Details from "../components/Details";
import Booking from "../pages/Booking";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import AddEvent from "../pages/AddEvent";
import AllEvents from "../pages/AllEvents";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import AllDashboardEvents from "../pages/AllDashboardEvents";
import UpdateEvent from "../pages/UpdateEvent";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/events",
                element: <AllEvents />
            },
            {
                path: "/details/:id",
                element: <Details />
            },
            {
                path: "/booking/:id",
                element: <Booking />
            },
            {
                path: "/signup",
                element: <Signup />
            },
            {
                path: "/login",
                element: <Login />
            },
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />
            },
            {
                path: "/dashboard/all-events",
                element: <AllDashboardEvents />
            },
            {
                path: "/dashboard/add-event",
                element: <AddEvent />
            },
            {
                path: "/dashboard/updateEvent/:id",
                element: <UpdateEvent />
            }
        ]
    }
])