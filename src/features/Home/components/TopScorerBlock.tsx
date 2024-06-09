import topScorersData from "@/mocks/TopScorerData.json";
import Image from "next/image";
import { BlockHeading } from "./BlockHeading";
import { PlayerScoreCard } from "./PlayerScoreCard";

export const TopScorerBlock = () => {
  return (
    <div className="lg:mt-10 w-full">
      <BlockHeading heading="Top Scorers" linkToMore="/" />

      <div className="relative mt-5 border-[1.5px] border-white/50 bg-white/5 rounded-[20px] py-5 px-4">
        <Image
          src="/images/meteor.png"
          alt="meteor"
          className="absolute top-0 right-0 left-2/4 -translate-x-2/4"
          width={215}
          height={215}
        />
        <div className="space-y-1">
          {topScorersData?.map((player) => (
            <PlayerScoreCard
              key={player.player_id}
              rank={player.player_id}
              goals={player.goals_scored}
              matches={player.matches_played}
              name={player.player_name}
              position="FC"
              src="/TeamLogo.svg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
