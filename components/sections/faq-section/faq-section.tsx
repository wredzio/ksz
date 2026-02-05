import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title: string;
  subtitle?: string | null;
  items: FaqItem[];
}

export const FaqSection = ({ title, subtitle, items }: FaqSectionProps) => {
  const words = title.split(" ");
  const lastWord = words.pop();
  const titleStart = words.join(" ");

  return (
    <div className="w-full py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="font-syne text-3xl font-bold md:text-4xl lg:text-5xl">
            {titleStart}{" "}
            <span className="text-primary">{lastWord}</span>
          </h2>
          {subtitle && (
            <p className="mt-4 font-dm-sans text-base text-muted-foreground md:text-lg">
              {subtitle}
            </p>
          )}
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible defaultValue="item-0">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="mb-3 overflow-visible rounded-xl border border-border bg-card last:border-b"
            >
              <AccordionTrigger className="px-6 py-5 font-syne text-base font-bold hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 font-dm-sans text-sm font-light text-muted-foreground pb-5">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
