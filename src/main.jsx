import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Header from "./Header.jsx";
import Index from "./Index.jsx";
import Footer from "./Footer.jsx";
import Playground from "./Playground/Playground.jsx";
import CodeEditor from "./CodeEditor.jsx";
import ScrollToTop from "./ScrollToTop.jsx";

function useDynamicCSS() {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  useEffect(() => {
    const head = document.head;

    head
      .querySelectorAll('link[data-dynamic="true"]')
      .forEach((el) => el.remove());

    let cssPath;
    if (path.startsWith("/playground")) {
      cssPath = new URL("./Playground/Playground.css", import.meta.url).href;
    } else {
      cssPath = new URL("./Index.css", import.meta.url).href;
    }

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = cssPath;
    link.setAttribute("data-dynamic", "true");
    head.appendChild(link);

    return () => {
      head
        .querySelectorAll('link[data-dynamic="true"]')
        .forEach((el) => el.remove());
    };
  }, [path]);
}

function AppLayout() {
  const location = useLocation();
  const path = location.pathname.toLowerCase();
  const hideHeaderFooter = path.startsWith("/playground");

  useDynamicCSS();

  return (
    <>
      {!hideHeaderFooter && <Header />}

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/codeeditor" element={<CodeEditor />} />
        <Route path="*" element={<Index />} />
      </Routes>

      {!hideHeaderFooter && <Footer />}
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <ScrollToTop />
      <AppLayout />
    </Router>
  </StrictMode>
);
