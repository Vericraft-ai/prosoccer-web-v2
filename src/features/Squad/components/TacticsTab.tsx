import { Button } from "@/blocks/components/Button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/blocks/components/Select";
import Image from "next/image";
import { useState } from "react";

export const TacticsTab = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-y-[3.625rem]">
      <div className="space-y-12">
        <TacticsButtonGroup
          title="Team mentality"
          options={[
            "Hard Defending",
            "Hard Attacking",
            "Attacking",
            "Defending",
          ]}
        />
        <TacticsButtonGroup
          title="Passing Style"
          options={["Short", "Long", "Mixed"]}
        />
        <TacticsButtonGroup
          title="Passing Style"
          options={["Mixed", "Left Wing", "Middle", "Right Wing", "Both Wings"]}
        />

        <div className="flex flex-col md:flex-row gap-5 md:gap-10 w-full">
          <TacticsSelectGroup
            title="Freekick shooter"
            options={[
              "Tobi A.",
              "Pius A.",
              "Emmanuel K.",
              "Sijuade O.",
              "Temi O.",
            ]}
          />
          <TacticsSelectGroup
            title="Penalty shooter"
            options={["Automatically selected"]}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-5 lg:gap-10 w-full">
          <TacticsSelectGroup
            title="Corner left shooter"
            options={["Automatically selected"]}
          />
          <TacticsSelectGroup
            title="Corner right shooter"
            options={["Automatically selected"]}
          />
        </div>
      </div>

      <div className="lg:justify-self-end">
        <Image
          src={"/images/pitch-tactics.svg"}
          width={415}
          height={572}
          alt="field"
        />
      </div>
    </div>
  );
};

type TacticsButtonGroupProps = {
  title: string;
  options: string[];
};

export const TacticsButtonGroup = ({
  title,
  options,
}: TacticsButtonGroupProps) => {
  const [selected, setSelected] = useState(options[0]);
  const handleClick = (option: string) => {
    setSelected(option);
  };

  return (
    <div>
      <p className="text-lg text-frieza">{title}</p>
      <div className="mt-4 flex gap-4 items-center flex-wrap">
        {options.map((option) => (
          <Button
            size={"tactics"}
            variant={"outline"}
            key={option}
            onClick={() => handleClick(option)}
            className={`${selected === option ? "bg-vegeta text-broly" : ""}`}
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
};

export const TacticsSelectGroup = ({
  options,
  title,
}: TacticsButtonGroupProps) => {
  return (
    <div className="w-full">
      <p className="text-lg text-frieza">{title}</p>
      <div className="mt-4 gap-4">
        <Select defaultValue={options[0]}>
          <SelectTrigger className="w-full h-[35px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {options.map((option) => (
                <SelectItem value={option} key={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
