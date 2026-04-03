import { hydrateRoot } from "react-dom/client";
import Home from "./pages/home";
import "./index.css";

hydrateRoot(document.getElementById("root")!, <Home />);
