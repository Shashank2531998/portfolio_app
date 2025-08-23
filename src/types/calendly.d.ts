
interface Calendly {
  initPopupWidget: (options: { url: string }) => void;
}

interface Window {
  Calendly: Calendly;
}

    