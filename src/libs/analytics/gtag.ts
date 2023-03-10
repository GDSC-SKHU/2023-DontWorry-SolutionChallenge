export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

type GtagEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: unknown;
};

export const pageview = (url: URL) => {
  if (typeof window.gtag === "undefined") {
    return;
  }
  window.gtag("config", GA_TRACKING_ID as string, {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }: GtagEvent) => {
  if (typeof window.gtag === "undefined") {
    return;
  }
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
