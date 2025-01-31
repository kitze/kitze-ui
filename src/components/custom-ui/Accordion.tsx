import React from "react";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import { cn } from "@/cn";

export interface AccordionItemProps {
  title: React.ReactNode;
  content: React.ReactNode;
}

export interface AccordionClassNames {
  root?: string;
  item?: string;
  button?: string;
  title?: string;
  icon?: string;
  panel?: string;
  content?: string;
}

export interface AccordionProps {
  items: AccordionItemProps[];
  classNames?: AccordionClassNames;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  classNames = {},
}) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  return (
    <div className={cn("space-y-6 divide-y divide-white/10", classNames.root)}>
      {items.map((item, index) => (
        <div key={index} className={cn("pt-6", classNames.item)}>
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className={cn(
              "flex w-full items-start justify-between text-left",
              classNames.button
            )}
          >
            <span
              className={cn(
                "text-base font-semibold leading-7",
                classNames.title
              )}
            >
              {item.title}
            </span>
            <span className="ml-6 flex h-7 items-center">
              {openIndex === index ? (
                <HiMinusSm
                  className={cn("h-6 w-6", classNames.icon)}
                  aria-hidden="true"
                />
              ) : (
                <HiPlusSm
                  className={cn("h-6 w-6", classNames.icon)}
                  aria-hidden="true"
                />
              )}
            </span>
          </button>
          {openIndex === index && (
            <div className={cn("mt-2", classNames.panel)}>
              <div className={cn("text-base leading-7", classNames.content)}>
                {item.content}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
