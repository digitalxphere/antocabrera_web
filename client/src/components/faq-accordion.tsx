import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQAccordion() {
  return (
    <div className="max-w-4xl mx-auto">
      <Accordion type="single" collapsible className="space-y-4" data-testid="faq-accordion">
        {FAQ_ITEMS.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="border border-border rounded-2xl overflow-hidden"
            data-testid={`faq-item-${item.id}`}
          >
            <AccordionTrigger className="px-6 py-4 hover:bg-muted/50 transition-colors text-left" data-testid={`faq-trigger-${item.id}`}>
              <span className="font-semibold text-foreground">{item.question}</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-muted-foreground" data-testid={`faq-content-${item.id}`}>
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
