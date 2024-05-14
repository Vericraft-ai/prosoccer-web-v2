import React from "react";
import { CardOne } from "./CardOne";
import { Gamepad2, MoveRight } from "lucide-react";
import { CardTwo } from "./CardTwo";
import { Button } from "@/blocks/components/Button";

export const CompetitionBlock = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-row justify-between w-full">
        <span className="text-broly">Competitions</span>
        <span className="text-vegeta">View all</span>
      </div>
      <CardOne
        logo={<Gamepad2 size={33} />}
        text="Community tournament"
        icon={<MoveRight />}
      />
      <CardTwo
        logo={<Gamepad2 size={33} />}
        text={["ARS", "AVFC"]}
        bagde={<Button className="cursor-default">{"2-5"}</Button>}
      />
      <CardOne
        logo={<Gamepad2 size={33} />}
        text="Pro Soccer League"
        icon={<MoveRight />}
      />
    </div>
  );
};
