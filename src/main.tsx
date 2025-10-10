import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import CoursePage from "./components/pages/CoursePage.tsx";
import HelpPage from "./components/pages/HelpPage.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/course" element={<CoursePage />} />
      <Route path="/help" element={<HelpPage />} />
    </Routes>
  </BrowserRouter>,
);
