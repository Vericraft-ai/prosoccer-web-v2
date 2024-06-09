import { Button } from "@/blocks/components/Button";
import { ArrowRight } from "lucide-react";
import { BlockHeading } from "./BlockHeading";
import { CompetitionCard } from "./CompetitionCard";
import { TeamEmblem } from "./TeamEmblem";

export const CompetitionsBlock = () => {
  return (
    <div className="w-full">
      <BlockHeading linkToMore="/" heading="Competitions" />
      <div className="space-y-5 mt-5">
        <CompetitionCard>
          <TeamEmblem src="/TeamLogo.svg" name="ARL" />
          <Button className="">2-5</Button>
          <TeamEmblem src="/TeamLogo.svg" name="ARL" />
        </CompetitionCard>
        <CompetitionCard>
          <TeamEmblem src="/TeamLogo.svg" name="Community tournament" />
          <button className="">
            <ArrowRight />
          </button>
        </CompetitionCard>
      </div>
    </div>
  );
};
