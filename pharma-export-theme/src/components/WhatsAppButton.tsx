import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/573001234567?text=Hola%2C%20quiero%20información%20sobre%20sus%20suplementos"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] text-[hsl(0,0%,100%)] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    aria-label="Contactar por WhatsApp"
  >
    <MessageCircle className="h-6 w-6" />
  </a>
);

export default WhatsAppButton;
