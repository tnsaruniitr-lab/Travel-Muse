import { renderToString } from "react-dom/server";
import Home from "./pages/home";
import { homeHeadTags } from "./pages/home-head";
import HowToPlanGroupTrip from "./pages/blog/how-to-plan-group-trip";
import { howToPlanGroupTripHeadTags } from "./pages/blog/how-to-plan-group-trip-head";

export async function render(url: string): Promise<{ appHtml: string; headTags: string }> {
  const pathname = url.split("?")[0].split("#")[0];

  if (pathname === "/blog/how-to-plan-a-group-trip") {
    return {
      appHtml: renderToString(<HowToPlanGroupTrip />),
      headTags: howToPlanGroupTripHeadTags,
    };
  }

  return {
    appHtml: renderToString(<Home />),
    headTags: homeHeadTags,
  };
}
