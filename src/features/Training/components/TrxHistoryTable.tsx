import { ThreeCubesIcon } from "@/blocks/icons/ThreeCubesIcon";
import { TrxHistoryRow } from "./TrxHistoryRow";

export const TrxHistoryTable = () => {
  const isEmpty = false;
  return (
    <div>
      {isEmpty && (
        <div className="flex flex-col justify-center items-center py-16">
          <ThreeCubesIcon />
          <h3 className="text-2xl text-frieza">No training yet</h3>
        </div>
      )}
      {!isEmpty && (
        <div className="mt-8 space-y-4 overflow-x-auto">
          {new Array(5).fill(0).map((_, index) => (
            <TrxHistoryRow
              attack={10}
              defense={20}
              menphy={30}
              drills={10}
              players={20}
              conditionCost={30}
              cost={40}
              date={"12/12/2021"}
              key={index}
            />
          ))}
        </div>
      )}
    </div>
  );
};
