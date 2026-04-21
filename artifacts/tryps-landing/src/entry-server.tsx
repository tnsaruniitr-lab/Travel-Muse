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
import PrivacyPolicy from "./pages/privacy";
import { privacyHeadTags } from "./pages/privacy-head";
import TermsOfService from "./pages/terms";
import { termsHeadTags } from "./pages/terms-head";

export async function render(url: string): Promise<{ appHtml: string; headTags: string }> {
  const pathname = url.split("?")[0].split("#")[0];

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
    appHtml: renderToString(<Home />),
    headTags: homeHeadTags,
  };
}
