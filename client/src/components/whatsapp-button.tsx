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
        className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 h-11 sm:px-4 sm:py-3 sm:h-14 rounded-full shadow-lg transition-all transform hover:scale-110 flex items-center gap-1.5 sm:gap-2"
        aria-label="Reservar por WhatsApp"
        data-testid="button-whatsapp-float"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        <span className="font-semibold text-sm sm:text-base">Reserva - WhatsApp</span>
      </Button>
    </div>
  );
}
