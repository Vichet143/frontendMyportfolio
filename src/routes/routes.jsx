import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home/index";
import About from "../pages/About";
import Education from "../pages/Education";
import Project from "../pages/Project";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";
import { useMetaPixel } from "@adkit/meta-pixel-react";
import { useEffect } from "react";

export default function AppRoutes() {
  const meta = useMetaPixel();
  const location = useLocation();

  useEffect(() => {
    if (!meta.isLoaded()) return;

    // -----------------------------------------
    // 1. Get UTM parameters from URL
    // -----------------------------------------
    const params = new URLSearchParams(location.search);

    const utmSource = params.get("utm_source");
    const utmMedium = params.get("utm_medium");
    const utmCampaign = params.get("utm_campaign");

    // -----------------------------------------
    // 2. Save original traffic source
    // -----------------------------------------
    if (utmSource) {
      const trafficSource = {
        source: utmSource,
        medium: utmMedium || null,
        campaign: utmCampaign || null,
        landing_page: location.pathname,
        timestamp: new Date().toISOString(),
      };

      sessionStorage.setItem(
        "portfolio_traffic_source",
        JSON.stringify(trafficSource)
      );
    }

    // -----------------------------------------
    // 3. Get saved traffic source
    // -----------------------------------------
    let trafficSource = null;

    try {
      trafficSource = JSON.parse(
        sessionStorage.getItem("portfolio_traffic_source")
      );
    } catch {
      trafficSource = null;
    }

    // -----------------------------------------
    // 4. Track standard Meta PageView
    // -----------------------------------------
    meta.track("PageView", {
      page_path: location.pathname,
      page_title: document.title,
    });

    // -----------------------------------------
    // 5. Track Facebook ad landing
    // -----------------------------------------
    if (
      location.pathname === "/projects" &&
      utmSource === "facebook" &&
      utmMedium === "paid"
    ) {
      meta.trackCustom("FacebookAdLanding", {
        page_path: location.pathname,
        traffic_source: "facebook",
        traffic_medium: "paid",
        traffic_campaign: utmCampaign || "unknown",
      });
    }

    // -----------------------------------------
    // 6. Track Google organic traffic
    // -----------------------------------------
    if (
      trafficSource?.source === "google" &&
      trafficSource?.medium === "organic"
    ) {
      meta.trackCustom("GoogleOrganicLanding", {
        page_path: location.pathname,
        traffic_source: "google",
        traffic_medium: "organic",
      });
    }
  }, [location.pathname, location.search, meta]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/education" element={<Education />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}