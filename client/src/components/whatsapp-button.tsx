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
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 h-14 rounded-full shadow-lg transition-all transform hover:scale-110 flex items-center gap-2"
        aria-label="Reservar por WhatsApp"
        data-testid="button-whatsapp-float"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="font-semibold">Reservar</span>
      </Button>
    </div>
  );
}
