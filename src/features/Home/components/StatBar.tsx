import { Progress } from "@/blocks/components/Progress";
import { useState, useEffect } from "react";

type Props = {
  homeValue: number;
  awayValue: number;
  statTitle: string;
};

export const StatBar = ({ awayValue, homeValue, statTitle }: Props) => {
  const [progress, setProgress] = useState(13);
  const homePercentageRatio = (homeValue / (homeValue + awayValue)) * 100;

  useEffect(() => {
    const timer = setTimeout(() => setProgress(homePercentageRatio), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center text-white mb-1.5">
        <span>{homeValue}</span>
        <span className="text-sm text-frieza font-medium">{statTitle}</span>
        <span>{awayValue}</span>
      </div>
      <Progress value={progress} className="h-1 bg-goku" />
    </div>
  );
};
