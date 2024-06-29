import { PlayerFeatureBlock } from "../../Shared/components/PlayerFeatureBlock";
import { PlayerFeatureCard } from "./PlayerFeatureCard";
import { PlayerTrxHistory } from "./PlayerTrxHistory";

export const PlayerSkillsTab = () => {
  return (
    <div>
      <div className="flex gap-3.5 mb-8 overflow-auto">
        <PlayerFeatureCard title="Skills">
          <PlayerFeatureBlock title="Overall" value={44} />
          <PlayerFeatureBlock title="Potential" value={43} />
          <PlayerFeatureBlock title="Specific role" value={23} />
          <PlayerFeatureBlock title="Perfect foot" value={23} />
          <PlayerFeatureBlock title="Height & Weight" value={23} />
          <PlayerFeatureBlock title="Height & Weight" value={23} />
        </PlayerFeatureCard>
        <PlayerFeatureCard title="Skills">
          <PlayerFeatureBlock title="Overall" value={44} />
          <PlayerFeatureBlock title="Potential" value={43} />
          <PlayerFeatureBlock title="Specific role" value={23} />
          <PlayerFeatureBlock title="Perfect foot" value={23} />
          <PlayerFeatureBlock title="Height & Weight" value={23} />
          <PlayerFeatureBlock title="Height & Weight" value={23} />
        </PlayerFeatureCard>
        <PlayerFeatureCard title="Skills">
          <PlayerFeatureBlock title="Overall" value={44} />
          <PlayerFeatureBlock title="Potential" value={43} />
          <PlayerFeatureBlock title="Specific role" value={23} />
          <PlayerFeatureBlock title="Perfect foot" value={23} />
          <PlayerFeatureBlock title="Height & Weight" value={23} />
          <PlayerFeatureBlock title="Height & Weight" value={23} />
        </PlayerFeatureCard>
      </div>
      <PlayerTrxHistory />
    </div>
  );
};
