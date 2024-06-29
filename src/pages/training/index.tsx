import { Button } from "@/blocks/components/Button";
import { Header } from "@/features/Layout/components/Header";
import { Wrapper } from "@/features/Layout/components/Wrapper";
import { AddDrillModal } from "@/features/Training/components/AddDrillModal";
import { NotEnoughFundModal } from "@/features/Training/components/NotEnoughFundModal";
import { TrxHistoryTable } from "@/features/Training/components/TrxHistoryTable";
import { ViewMoreTrxHistoryModal } from "@/features/Training/components/ViewMoreTrxHistoryModal";
import Image from "next/image";
import { useState } from "react";

const Training = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [hasPlayers, setHasPlayers] = useState(false);

  return (
    <Wrapper>
      {!hasPlayers && <Header isConnected={isConnected} search />}
      <div className="mt-8">
        <h1 className="text-2xl lg:text-[2.5rem] font-bold">Training Plan</h1>

        <div className="bg-piccolo p-6 lg:p-[3.625rem] rounded-2xl mt-8">
          <h1 className="text-xl md:text-2xl lg:text-[2rem] font-medium lg:w-[40%] leading-[32px] lg:leading-[44px] text-trunks">
            Connect your wallet to play Pro soccer
          </h1>
          <div className="flex ">
            <Image
              src={"/images/eth.svg"}
              alt="eth"
              width={120}
              height={120}
              className="h-16 w-16 md:h-[86px] md:w-[86px] lg:h-[120px] lg:w-[120px]"
            />
            <Image
              src={"/images/bitcoin.svg"}
              alt="eth"
              width={120}
              height={120}
              className="h-16 w-16 md:h-[86px] md:w-[86px] lg:h-[120px] lg:w-[120px]"
            />
          </div>
        </div>
        <div className="mt-8 flex items-center gap-5">
          <AddDrillModal />
          <Button variant={"outline"}>Start</Button>
        </div>

        <div>
          <div className="flex justify-between items-center border-b border-frieza mt-10 pb-2">
            <h2 className="text-xl lg:text-2xl">Training history</h2>
            <ViewMoreTrxHistoryModal />
          </div>
          <TrxHistoryTable />
        </div>
      </div>
      <NotEnoughFundModal open={false} onOpenChange={() => {}} />
    </Wrapper>
  );
};

export default Training;
