import { createBrowserRouter } from "react-router-dom"
import AuthLayout from "../layout/AuthLayout"
import DashboardLayout from "../layout/DashboardLayout"
import Home from "../pages/dashboard/Home"
import UsersTable from "../pages/users/UserTabel"
import LoginPage from "../pages/Auth/LoginPage"
import RegisterPage from "../pages/Auth/RegisterPAge"

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <LoginPage /> },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Home /> }, // dashboard main page
      { path: "users", element: <UsersTable /> }, // data table
    ],
  },
])

export default router
