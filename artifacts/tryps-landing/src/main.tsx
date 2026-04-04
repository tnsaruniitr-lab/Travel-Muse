import { hydrateRoot } from "react-dom/client";
import Home from "./pages/home";
import BlogIndex from "./pages/blog/index";
import HowToPlanGroupTrip from "./pages/blog/how-to-plan-group-trip";
import "./index.css";

const pathname = window.location.pathname;

let App: React.ComponentType;

if (pathname === "/blog") {
  App = BlogIndex;
} else if (pathname === "/blog/how-to-plan-a-group-trip") {
  App = HowToPlanGroupTrip;
} else {
  App = Home;
}

hydrateRoot(document.getElementById("root")!, <App />);
