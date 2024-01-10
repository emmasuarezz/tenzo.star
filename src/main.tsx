import React from "react";
import ReactDOM from "react-dom/client";
import { Calculate, Landing, Result } from "./Pages";
import "./styles/CSS/reset.css";
import { Routes, Route } from "react-router-dom";
import { AstroDataProvider } from "./Context/astroContext"; // Import the context provider

const App = () => (
  <React.StrictMode>
    <AstroDataProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/calculate" element={<Calculate />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </AstroDataProvider>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);

export default App;
