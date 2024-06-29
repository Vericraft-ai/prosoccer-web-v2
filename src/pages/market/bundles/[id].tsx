import { Button } from "@/blocks/components/Button";
import { CoinIcon } from "@/blocks/icons/CoinIcon";
import { MoveBackIcon } from "@/blocks/icons/MoveBackIcon";
import { Header } from "@/features/Layout/components/Header";
import { Wrapper } from "@/features/Layout/components/Wrapper";
import { BundleDetailBox } from "@/features/Market/components/BundleDetailBox";
import { PlayerCard } from "@/features/Market/components/PlayerCard";
import defenders from "@/mocks/playersBundle.json";
import Image from "next/image";
import Link from "next/link";

export default function BundleDetail() {
  return (
    <Wrapper>
      <Header isConnected={true} search />
      <div className="mt-8">
        <Link className="pl-0 text-lg" href="../">
          <MoveBackIcon className="w-8 h-8" />
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[auto_70%] gap-4 lg:gap-11 mt-8">
          <div>
            <Image
              src={"/images/bundles-players.png"}
              alt="players"
              width={280}
              height={390}
            />
          </div>
          <div>
            <Button size={"tactics"} variant={"outline"}>
              Bundle
            </Button>
            <h1 className="text-[2.5rem] font-bold mt-3.5">11 Players</h1>
            <div className="mt-6 flex flex-col lg:flex-row lg:items-end gap-12">
              <div className="flex gap-16">
                <div className="">
                  <span>Overall</span>
                  <h1 className="font-bold text-[2.5rem] text-vegeta">44</h1>
                </div>{" "}
                <div className="">
                  <span>Potential</span>
                  <h1 className="font-bold text-[2.5rem] text-vegeta">43</h1>
                </div>
              </div>
              <div className="flex gap-5 flex-col md:flex-row items-start">
                <BundleDetailBox
                  items={[
                    { title: "S. Abilities", value: 1 },
                    { title: "Avg.Age", value: 22 },
                  ]}
                  className="min-w-0 lg:min-w-0"
                />
                <BundleDetailBox
                  items={[
                    { title: "Goalkeepers", value: 1 },
                    { title: "Defenders", value: 4 },
                    { title: "Midfielders", value: 4 },
                    { title: "Forwards", value: 2 },
                  ]}
                  className="min-w-0 lg:min-w-0"
                />
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-5 mt-5 flex justify-between items-center">
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-1.5">
                  <CoinIcon className="w-7 h-7" />
                  <span>1,180.34</span>
                </div>
                <span>$1.85</span>
              </div>

              <Button>Buy now</Button>
            </div>

            <div className="mt-11 space-y-8">
              <PlayersPane players={defenders} position="Defenders" />
              <PlayersPane players={defenders} position="Midfielders" />
              <PlayersPane players={defenders} position="Forwards" />
              <PlayersPane
                players={defenders.slice(0, 1)}
                position="Goalkeepers"
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

type PlayerCardWrapperProps = {
  players: BundlePlayer[];
  position: string;
};

export const PlayersPane = ({ players, position }: PlayerCardWrapperProps) => {
  return (
    <div>
      <h2 className="text-2xl">{position}</h2>
      <div className="flex gap-x-8 mt-6 overflow-x-auto">
        {players.map((player) => (
          <PlayerCard key={player.id} {...player} />
        ))}
      </div>
    </div>
  );
};
