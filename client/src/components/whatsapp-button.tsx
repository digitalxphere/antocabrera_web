import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/constants";

export function WhatsAppButton() {
  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
      "_blank"
    );
  };

  return (
    <div className="floating-whatsapp">
      <Button
        onClick={handleWhatsApp}
        size="icon"
        className="bg-green-500 hover:bg-green-600 text-white p-4 h-14 w-14 rounded-full shadow-lg transition-all transform hover:scale-110"
        aria-label="Contactar por WhatsApp"
        data-testid="button-whatsapp-float"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
}
