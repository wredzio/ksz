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
          <h2 className="font-syne text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
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
              className="mb-3 rounded-xl border border-[rgba(30,30,50,0.5)] bg-[rgba(14,20,47,0.42)] px-6 last:border-b"
            >
              <AccordionTrigger className="py-5 font-syne text-base font-bold hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="font-dm-sans text-sm font-light text-muted-foreground pb-5">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
