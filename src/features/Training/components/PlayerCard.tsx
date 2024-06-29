import { RoleBadge } from "@/features/Shared/components/RoleBadge";
import Image from "next/image";

type Props = {
  item: MarketPlaceItem;
  onClick?: () => void;
};

export const PlayerCard = ({ item, onClick }: Props) => {
  return (
    <div
      className="relative px-6 py-4 lg:py-4 md:py-2.5  bg-piccolo border border-white/50 rounded-lg cursor-pointer"
      onClick={onClick}
    >
      <div
        className="absolute top-0 bottom-0 right-0 left-0 opacity-5 bg-no-repeat bg-cover bg-center"
        aria-hidden="true"
      />
      <div className="relative z-[1] flex justify-between">
        <div className="">
          <div className="flex gap-3 items-center">
            <p className="text-4xl md:text-[1.25rem] lg:text-[1.75rem] font-semibold text-broly">
              {item.abilities}
            </p>
            <p className="text-frieza md:text-sm">/44</p>
            <RoleBadge role={"RB"} />
          </div>
          <p className="mt-10 h-5 flex justify-center items-center px-2.5 text-xs border-frieza border bg-zeno/15 rounded text-white w-fit">
            Cond 100%
          </p>
          <p className="mt-5 text-base text-broly font-semibold whitespace-nowrap">
            {item.playerName}
          </p>
          <div className="flex gap-8 mt-2.5">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-normal text-frieza">Age</p>
              <p className="text-sm font-semibold text-broly">{item.age}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs font-normal text-frieza">S.Abil</p>
              <p className="text-sm font-semibold text-broly">1</p>
            </div>
          </div>
        </div>

        <Image
          src={item.image}
          alt={item.playerName || "bundle"}
          width={210}
          height={240}
          fetchPriority="auto"
          className="absolute -right-4 top-0 h-[192px] md:w-[130px] md:h-[150px] lg:w-[170px] lg:h-[190px] object-contain"
        />
      </div>
    </div>
  );
};
