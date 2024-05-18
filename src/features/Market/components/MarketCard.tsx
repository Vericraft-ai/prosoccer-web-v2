import Image from "next/image";

export const MarketCard = ({ bundle }: { bundle: any }) => {
  return (
    <div className="p-6 border border-white/10 rounded-[28px] w-max">
      <div className="flex">
        <div className="flex flex-col gap-6">
          <div className="flex gap-3">
            <p className="text-2xl font-semibold text-broly">
              {bundle.abilities}
            </p>
            <p className="text-base font-normal text-frieza">/44</p>
          </div>
          <p className="py-1 px-4 border-frieza border bg-zeno/15 rounded text-white">
            Bundle
          </p>
          <p className="text-base text-broly font-semibold">
            {bundle.playerCount} players
          </p>
          <div className="flex gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-normal text-frieza">Age</p>
              <p className="text-sm font-semibold text-broly">{bundle.age}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs font-normal text-frieza">S.Abil</p>
              <p className="text-sm font-semibold text-broly">1</p>
            </div>
          </div>
        </div>

        <Image
          src={bundle.image}
          alt={bundle.name}
          width={200}
          height={200}
          fetchPriority="auto"
        />
      </div>

      <p className="w-100 bg-gohan/60">{bundle.price}</p>
    </div>
  );
};
