import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/blocks/components/Accordion";
import { Button } from "@/blocks/components/Button";
import { Dropdown } from "@/features/Shared/components/Dropdown";

type Props = {
  filterContents: {
    title: string;
    options: { label: string; value: string }[];
  }[];
};

export function FilterPanel({ filterContents }: Props) {
  return (
    <div>
      <div className="flex flex-col gap-5">
        <div className="order-2 lg:order-1 space-y-5 w-full">
          <Dropdown options={["Prices", "Ability"]} className="md:w-full" />
          <Dropdown options={["All", "Some"]} className="md:w-full" />
        </div>
        <div className="order-1 lg:order-2">
          <div className="flex justify-between">
            <Button className="pl-0 text-lg" variant={"ghost"}>
              Filter
            </Button>
            <Button className="pr-0 font-normal text-frieza" variant={"ghost"}>
              Clear
            </Button>
          </div>
        </div>
      </div>

      <Accordion type="single" collapsible className="w-full mt-5">
        {filterContents.map((content, index) => (
          <AccordionItem value={content.title} key={index}>
            <AccordionTrigger className="text-base font-normal">
              {content.title}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-frieza">
              <ul>
                {content.options.map((option, index) => (
                  <li
                    className="hover:underline hover:text-white cursor-pointer"
                    key={index}
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
