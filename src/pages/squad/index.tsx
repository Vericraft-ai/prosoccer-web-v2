import React from "react";
import { Header } from "@/features/Layout/components/Header";
import { Wrapper } from "@/features/Layout/components/Wrapper";

const squad = () => {
  return (
    <Wrapper>
      <Header>
        <div className="text-broly text-lg">
          The easiest way to start is to buy a bundle of players. So go to our
          marketplace, explore the bundles and get your first squad!
        </div>
      </Header>
    </Wrapper>
  );
};

export default squad;
