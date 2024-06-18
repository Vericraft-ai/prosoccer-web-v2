import SoccerLineUp from "react-soccer-lineup";
import { Team } from "react-soccer-lineup/dist/components/team/Team";

type Props = {
  homeTeam?: Team;
  awayTeam?: Team;
};
export const LineUp = ({ homeTeam, awayTeam }: Props) => {
  return (
    <SoccerLineUp
      size={"responsive"}
      color={"#2A2836"}
      pattern={"lines"}
      homeTeam={homeTeam}
      awayTeam={awayTeam}
    />
  );
};
