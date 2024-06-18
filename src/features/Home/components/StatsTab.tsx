import { StatBar } from "./StatBar";

export const StatsTab = () => {
  return (
    <div className="space-y-8">
      <StatBar awayValue={22} homeValue={16} statTitle="Shoots" />
      <StatBar awayValue={22} homeValue={16} statTitle="Possession" />
      <StatBar awayValue={22} homeValue={16} statTitle="Shoots on target" />
      <StatBar awayValue={22} homeValue={16} statTitle="Passes" />
      <StatBar awayValue={22} homeValue={16} statTitle="Assist" />
      <StatBar awayValue={22} homeValue={16} statTitle="Long passes" />
      <StatBar awayValue={22} homeValue={16} statTitle="Short passes" />
      <StatBar awayValue={22} homeValue={16} statTitle="High passes" />
    </div>
  );
};
