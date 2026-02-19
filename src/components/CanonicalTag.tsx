import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function CanonicalTag() {
  const location = useLocation();

  useEffect(() => {
    const baseUrl = "https://www.tophuis.be";
    const canonicalUrl = `${baseUrl}${location.pathname}`;
    
    // Remove existing canonical tag
    const existingCanonical = document.querySelector("link[rel='canonical']");
    if (existingCanonical) {
      existingCanonical.remove();
    }

    // Add new canonical tag
    const link = document.createElement("link");
    link.rel = "canonical";
    link.href = canonicalUrl;
    document.head.appendChild(link);

    return () => {
      const linkToRemove = document.querySelector("link[rel='canonical']");
      if (linkToRemove) {
        linkToRemove.remove();
      }
    };
  }, [location.pathname]);

  return null;
}
