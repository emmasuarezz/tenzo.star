import React from "react";
import ReactDOM from "react-dom/client";
import { Calculate, Landing, Result } from "./Pages";
import "./styles/CSS/reset.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AstroDataProvider } from "./Context/astroContext"; // Import the context provider

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  { path: "/calculate", element: <Calculate /> },
  { path: "/result", element: <Result /> },
]);

const App = () => (
  <React.StrictMode>
    <AstroDataProvider>
      <RouterProvider router={router} />
    </AstroDataProvider>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);

export default App;
