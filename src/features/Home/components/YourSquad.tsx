import { Field } from "@/blocks/svgs/Field";
import { Star } from "lucide-react";

export const YourSquad = () => {
  return (
    <section className="mt-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h2 className="font-semibold md:text-2xl">Your Squad</h2>
          <span className="text-sm md:text-base">4-4-2-A</span>
        </div>
        <div className="flex gap-2 items-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star className="w-[12.5px] h-[12.5px] stroke-frieza" key={index} />
          ))}
          <span>0</span>
        </div>
      </div>

      <div className="mt-7">
        <Field className="w-full h-full" />
      </div>
    </section>
  );
};
