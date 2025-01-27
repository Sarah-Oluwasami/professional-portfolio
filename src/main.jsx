import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

// Initialize AOS
AOS.init({
  duration: 2000, // Animation duration (in ms)
  easing: "ease-in", // Easing function
  once: false, // Animate only once when in view
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Call AOS.refresh() to reinitialize AOS after the page is loaded
useEffect(() => {
  AOS.refresh(); // Refresh AOS after the page content is loaded
}, []);
