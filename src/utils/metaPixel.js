// src/utils/metaPixel.js

/**
 * Track a standard Meta Pixel event
 */
export const trackEvent = (eventName, parameters = {}) => {
  if (
    typeof window !== "undefined" &&
    typeof window.fbq === "function"
  ) {
    window.fbq("track", eventName, parameters);
  } else {
    console.warn("Meta Pixel is not loaded yet.");
  }
};


/**
 * Track a custom Meta Pixel event
 */
export const trackCustomEvent = (
  eventName,
  parameters = {}
) => {
  if (
    typeof window !== "undefined" &&
    typeof window.fbq === "function"
  ) {
    window.fbq("trackCustom", eventName, parameters);
  } else {
    console.warn("Meta Pixel is not loaded yet.");
  }
};

export const trackMetaEvent = (eventName, parameters = {}) => {
  if (
    typeof window !== "undefined" &&
    typeof window.fbq === "function"
  ) {
    window.fbq("track", eventName, parameters);

    console.log("Meta Pixel event sent:", eventName, parameters);
  } else {
    console.error("Meta Pixel fbq is NOT loaded");
  }
};