import { hydrateRoot } from "react-dom/client";
import Home from "./pages/home";
import BlogIndex from "./pages/blog/index";
import HowToPlanGroupTrip from "./pages/blog/how-to-plan-group-trip";
import OahuGroupTripItinerary from "./pages/blog/oahu-group-trip-itinerary";
import HowTrypsWorks from "./pages/blog/how-tryps-works";
import PrivacyPolicy from "./pages/privacy";
import TermsOfService from "./pages/terms";
import "./index.css";

const pathname = window.location.pathname;

let App: React.ComponentType;

if (pathname === "/blog") {
  App = BlogIndex;
} else if (pathname === "/blog/how-to-plan-a-group-trip") {
  App = HowToPlanGroupTrip;
} else if (pathname === "/blog/oahu-group-trip-itinerary") {
  App = OahuGroupTripItinerary;
} else if (pathname === "/blog/how-tryps-works") {
  App = HowTrypsWorks;
} else if (pathname === "/privacy") {
  App = PrivacyPolicy;
} else if (pathname === "/terms") {
  App = TermsOfService;
} else {
  App = Home;
}

hydrateRoot(document.getElementById("root")!, <App />);
