import Image from "next/image";
import { Badge } from "./Badge";

type Props = {
  title: string;
  attributes: string[];
  condition: number;
  players: number;
  cost: number;
  onClick?: () => void;
};

export const DrillCard = (props: Props) => {
  return (
    <div
      className="rounded-lg border border-frieza relative cursor-pointer "
      onClick={props.onClick}
    >
      <Badge
        className="absolute top-3 left-5 z-10 text-[8px] bg-marron text-[#041E36]"
        title="Men & Phy"
      />
      <div className="w-full h-[120px] relative rounded-lg">
        <Image
          src={"/images/drill-player.jpeg"}
          alt="drill-player"
          fill
          className="object-cover rounded-t-lg"
        />
      </div>
      <div className="px-5 py-4">
        <h2 className="text-lg font-medium text-frieza">{props.title}</h2>

        <div className="flex items-center flex-wrap gap-2 mt-4 w-[97%]">
          {props.attributes.map((attribute) => (
            <Badge title={attribute} key={attribute} />
          ))}
        </div>

        <div className="mt-4 flex items-center bg-gohan/[0.67] py-2 px-2.5 text-sm text-frieza gap-4 ">
          <span>
            Cond <span className="text-zeno">-{props.condition}%</span>
          </span>
          <span>
            Players <span className="text-zeno">{props.players}</span>
          </span>
          <span className="ml-auto">
            Cost/Player <span className="text-zeno">{props.cost}</span>
          </span>
        </div>
      </div>
    </div>
  );
};
