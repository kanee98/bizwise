"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/track";

export default function TrackingListener() {
  useEffect(() => {
    const handleGlobalClicks = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Find closest link tag if the click was inside a link
      const link = target.closest("a");
      if (link) {
        const href = link.getAttribute("href") || "";
        
        // WhatsApp click tracking
        if (href.includes("wa.me") || href.includes("api.whatsapp.com") || href.includes("whatsapp")) {
          trackEvent("whatsapp_click", {
            category: "Contact",
            label: href,
            text: link.innerText || "WhatsApp Link",
          });
          return;
        }

        // Phone click tracking
        if (href.startsWith("tel:")) {
          trackEvent("phone_click", {
            category: "Contact",
            label: href,
            number: href.replace("tel:", ""),
          });
          return;
        }

        // General CTA links
        const isCta = link.classList.contains("btn-cta") || link.getAttribute("data-cta") !== null;
        if (isCta) {
          trackEvent("cta_click", {
            category: "Navigation",
            label: link.innerText || href,
            destination: href,
          });
        }
      } else {
        // Track generic button CTA clicks
        const button = target.closest("button");
        if (button) {
          const isCta = button.classList.contains("btn-cta") || button.getAttribute("data-cta") !== null;
          if (isCta) {
            trackEvent("cta_click", {
              category: "Action",
              label: button.innerText || "Button Click",
            });
          }
        }
      }
    };

    document.addEventListener("click", handleGlobalClicks);
    return () => {
      document.removeEventListener("click", handleGlobalClicks);
    };
  }, []);

  return null;
}
