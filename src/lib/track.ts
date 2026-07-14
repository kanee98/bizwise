type EventName = 
  | 'cta_click' 
  | 'form_submit' 
  | 'phone_click' 
  | 'whatsapp_click';

interface EventParams {
  category?: string;
  label?: string;
  value?: string | number;
  [key: string]: string | number | boolean | undefined;
}

export const trackEvent = (name: EventName, params: EventParams = {}) => {
  if (typeof window === 'undefined') return;

  // Log in development mode
  if (process.env.NODE_ENV === 'development') {
    console.log(`%c[Event Tracker] %c${name}`, 'color: #4DA3FF; font-weight: bold;', 'color: #ffffff;', params);
  }

  // Trigger Google Analytics 4 if available
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, {
      event_category: params.category || 'General',
      event_label: params.label || '',
      value: params.value,
      ...params,
    });
  }
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
