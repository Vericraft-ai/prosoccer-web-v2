import { Button } from "@/blocks/components/Button";
import { cn } from "@/blocks/utils/cn";

type RowProps = {
  attack: number;
  defense: number;
  menphy: number;
  drills: number;
  players: number;
  conditionCost: number;
  cost: number;
  date: string;
};

export const TrxHistoryRow = (props: RowProps) => {
  return (
    <div className="flex items-center gap-10 bg-piccolo py-4 px-5 rounded-lg justify-between h-[67px] w-fit lg:w-full">
      <div className="flex items-center gap-5">
        <Attribute name="Attack" value={props.attack} />
        <Attribute
          name="Defense"
          value={props.defense}
          className="text-vegeta"
        />
        <Attribute
          name="Men.&Phy"
          value={props.menphy}
          className="text-[#3AB83A]"
        />
      </div>
      <div className="border-r border-frieza h-full" />
      <div className="flex items-center gap-5">
        <Attribute name="Drills" value={props.drills} />
        <Attribute name="Players" value={props.players} />
        <Attribute name="Condition cost" value={props.conditionCost} />
        <Attribute name="Cost" value={props.cost} />
      </div>
      <div className="border-r border-frieza h-full" />
      <div className="flex items-center gap-5 ">
        <Attribute name="Date" value={props.date} />
        <Button variant="outline" size={"sm"}>
          Load training
        </Button>
      </div>
    </div>
  );
};

export const Attribute = ({
  name,
  value,
  className,
}: {
  name: string;
  value: number | string;
  className?: string;
}) => {
  return (
    <span className="text-sm font-semibold whitespace-nowrap flex items-center gap-1">
      {name}
      <span className={cn("font-normal text-frieza", className)}>{value}</span>
    </span>
  );
};
