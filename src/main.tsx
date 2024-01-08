import React from "react";
import ReactDOM from "react-dom/client";
import { Calculate, Landing } from "./Pages";
import "./styles/CSS/reset.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  { path: "/calculate", element: <Calculate /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
