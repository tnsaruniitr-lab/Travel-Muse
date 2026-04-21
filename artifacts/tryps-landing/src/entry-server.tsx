import { renderToString } from "react-dom/server";
import Home from "./pages/home";
import { homeHeadTags } from "./pages/home-head";
import BlogIndex from "./pages/blog/index";
import { blogIndexHeadTags } from "./pages/blog/index-head";
import HowToPlanGroupTrip from "./pages/blog/how-to-plan-group-trip";
import { howToPlanGroupTripHeadTags } from "./pages/blog/how-to-plan-group-trip-head";
import OahuGroupTripItinerary from "./pages/blog/oahu-group-trip-itinerary";
import { oahuGroupTripItineraryHeadTags } from "./pages/blog/oahu-group-trip-itinerary-head";
import HowTrypsWorks from "./pages/blog/how-tryps-works";
import { howTrypsWorksHeadTags } from "./pages/blog/how-tryps-works-head";
import NashvilleBacheloretteTrip from "./pages/blog/nashville-bachelorette-trip";
import { nashvilleBacheloretteTripHeadTags } from "./pages/blog/nashville-bachelorette-trip-head";
import BestGroupTripPlanningApps from "./pages/blog/best-group-trip-planning-apps";
import { bestGroupTripPlanningAppsHeadTags } from "./pages/blog/best-group-trip-planning-apps-head";
import PrivacyPolicy from "./pages/privacy";
import { privacyHeadTags } from "./pages/privacy-head";
import TermsOfService from "./pages/terms";
import { termsHeadTags } from "./pages/terms-head";
import NotFound from "./pages/not-found";
import { notFoundHeadTags } from "./pages/not-found-head";

export async function render(url: string): Promise<{ appHtml: string; headTags: string; status?: number }> {
  const pathname = url.split("?")[0].split("#")[0];

  if (pathname === "/") {
    return {
      appHtml: renderToString(<Home />),
      headTags: homeHeadTags,
    };
  }

  if (pathname === "/blog") {
    return {
      appHtml: renderToString(<BlogIndex />),
      headTags: blogIndexHeadTags,
    };
  }

  if (pathname === "/blog/how-to-plan-a-group-trip") {
    return {
      appHtml: renderToString(<HowToPlanGroupTrip />),
      headTags: howToPlanGroupTripHeadTags,
    };
  }

  if (pathname === "/blog/oahu-group-trip-itinerary") {
    return {
      appHtml: renderToString(<OahuGroupTripItinerary />),
      headTags: oahuGroupTripItineraryHeadTags,
    };
  }

  if (pathname === "/blog/how-tryps-works") {
    return {
      appHtml: renderToString(<HowTrypsWorks />),
      headTags: howTrypsWorksHeadTags,
    };
  }

  if (pathname === "/blog/nashville-bachelorette-trip") {
    return {
      appHtml: renderToString(<NashvilleBacheloretteTrip />),
      headTags: nashvilleBacheloretteTripHeadTags,
    };
  }

  if (pathname === "/blog/best-group-trip-planning-apps-2026") {
    return {
      appHtml: renderToString(<BestGroupTripPlanningApps />),
      headTags: bestGroupTripPlanningAppsHeadTags,
    };
  }

  if (pathname === "/privacy") {
    return {
      appHtml: renderToString(<PrivacyPolicy />),
      headTags: privacyHeadTags,
    };
  }

  if (pathname === "/terms") {
    return {
      appHtml: renderToString(<TermsOfService />),
      headTags: termsHeadTags,
    };
  }

  return {
    appHtml: renderToString(<NotFound />),
    headTags: notFoundHeadTags,
    status: 404,
  };
}
