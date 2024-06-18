import React, { useState } from "react";
import { Header } from "@/features/Layout/components/Header";
import { Wrapper } from "@/features/Layout/components/Wrapper";
import { LineUp } from "@/features/Shared/components/LineUp";
import { SquadTabs } from "@/features/Squad/components/SquadTabs";
import { ProspectView } from "@/features/Squad/components/ProspectView";
import { SquadHeader } from "@/features/Squad/components/SquadHeader";

const Squad = () => {
  const [isConnected, setIsConnected] = useState(true);
  const [hasPlayers, setHasPlayers] = useState(true);

  return (
    <Wrapper>
      {!hasPlayers && <Header isConnected={isConnected} search />}
      {hasPlayers && <SquadHeader />}
      {!hasPlayers && <ProspectView />}
      {hasPlayers && <SquadTabs />}
    </Wrapper>
  );
};

export default Squad;
