import { PlayerFeatureBlock } from "../../Shared/components/PlayerFeatureBlock";
import { PlayerFeatureCard } from "./PlayerFeatureCard";
import { PlayerTrxHistory } from "./PlayerTrxHistory";

export const PlayerOverviewTab = () => {
  return (
    <div>
      <div className="flex gap-3.5 mb-8 overflow-auto">
        <PlayerFeatureCard title="Skills">
          <PlayerFeatureBlock title="Overall" value={44} />
          <PlayerFeatureBlock title="Potential" value={43} />
          <PlayerFeatureBlock title="Specific role" value={23} />
          <PlayerFeatureBlock title="Perfect foot" value={23} />
          <PlayerFeatureBlock title="Height & Weight" value={23} />
        </PlayerFeatureCard>
        <PlayerFeatureCard title="Personal">
          <PlayerFeatureBlock title="Technical" value={44} />
          <PlayerFeatureBlock title="Condition" value={43} />
          <PlayerFeatureBlock title="Form" value={23} />
          <div className="flex items-center justify-between text-sm font-semibold">
            <span>Status</span>
            <span className="text-green-500">Ready</span>
          </div>
        </PlayerFeatureCard>
        <PlayerFeatureCard title="Special Abilities">
          <PlayerFeatureBlock
            title="Ability is dedicated to Scouts"
            value={44}
          />
          <PlayerFeatureBlock
            title="Ability is dedicated to Players"
            value={43}
          />
        </PlayerFeatureCard>
      </div>
      <PlayerTrxHistory />
    </div>
  );
};
