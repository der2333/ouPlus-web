import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import CoursePage from "./components/pages/CoursePage.tsx";
import HelpPage from "./components/pages/HelpPage.tsx";
import CourseVerifyPage from "./components/pages/CourseVerifyPage.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/course" element={<CoursePage />} />
      <Route path="/course-verify" element={<CourseVerifyPage />} />
      <Route path="/help" element={<HelpPage />} />
    </Routes>
  </BrowserRouter>,
);
