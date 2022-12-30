import { createBrowserRouter, redirect } from "react-router-dom";

// Unconnected
import Login from "../views/Login";
import Signup from "../views/Signup";
import Logout from "../views/Logout";
import PageNotFound from "../views/PageNotFound";

// User
import Home from "../views/user/Home";
import UserApp from "../views/user/UserApp";
import ChatRoom from "../views/user/ChatRoom";
import ServiceClient from "../views/user/ServiceClient";
import WSTest from "../components/WSTest";

// Admin
import AdminApp from "../views/admin/AdminApp";
import SavAdmin from "../views/admin/SavAdmin";
import Chat from "../views/PrivateChat";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UserApp />,
    errorElement: <PageNotFound />,
    loader: () => {
      if (localStorage.getItem("role") !== "user") throw redirect("/login");
    },
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "service-client",
        element: <ServiceClient />,
      },
      {
        path: "private-chat",
        element: <Chat />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminApp />,
    errorElement: <PageNotFound />,
    loader: () => {
      if (localStorage.getItem("role") !== "admin") throw redirect("/login");
    },
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "sav-admin",
        element: <SavAdmin />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "*",
    element: <PageNotFound />,
    loader: () => {
      throw redirect("/login");
    },
  },
]);
