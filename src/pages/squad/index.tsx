import React from "react";
import { Header } from "@/features/Layout/components/Header";
import { Wrapper } from "@/features/Layout/components/Wrapper";
import { LineUp } from "@/features/Squad/components/LineUp";

const squad = () => {
  return (
    <Wrapper>
      <Header>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="text-broly text-lg text-center">
            The easiest way to start is to buy a bundle of players. So go to our
            marketplace, explore the bundles and get your first squad!
          </div>
          <LineUp />
        </div>
      </Header>
    </Wrapper>
  );
};

export default squad;
