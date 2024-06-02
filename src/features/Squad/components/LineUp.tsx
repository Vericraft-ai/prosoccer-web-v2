import React from "react";
import SoccerLineUp from "react-soccer-lineup";
import { homeTeam } from "../../../mocks/LineUpData";

export const LineUp = () => {
  return (
    <div className="w-full flex justify-center items-center mt-10">
      <SoccerLineUp
        size={"responsive"}
        color={"#2E8A05"}
        pattern={"circles"}
        homeTeam={homeTeam}
      />
    </div>
  );
};
