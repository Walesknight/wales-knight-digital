import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag("event", "whatsapp_click", {
        event_category: "engagement",
        event_label: "WhatsApp Button",
      });
    }
  };

  return (
    <a
      href="https://wa.me/2349058910187"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleWhatsAppClick}
      aria-label="Chat with Wales Knight on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-3xl text-white shadow-xl transition hover:scale-110"
    >
      <FaWhatsapp />
    </a>
  );
}