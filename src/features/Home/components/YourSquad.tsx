import { Field } from "@/blocks/svgs/Field";
import { Rating } from "@/features/Shared/components/Rating";
import SoccerLineUp from "react-soccer-lineup";
import { homeTeam } from "@/mocks/LineUpData";
import { LineUp } from "@/features/Shared/components/LineUp";

export const YourSquad = () => {
  return (
    <section className="mt-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h2 className="font-semibold md:text-2xl">Your Squad</h2>
          <span className="text-sm md:text-base">4-4-2-A</span>
        </div>
        <div className="flex gap-2 items-center">
          <Rating rating={3} />
          <span>3</span>
        </div>
      </div>

      <div className="mt-7">
        {/* <Field className="w-full h-full" /> */}
        <LineUp homeTeam={homeTeam} />
      </div>
    </section>
  );
};
