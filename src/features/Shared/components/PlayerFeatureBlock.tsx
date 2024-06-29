import { Progress } from "@/blocks/components/Progress";

type PlayerFeatureBlockProps = {
  title: string;
  value: number | string;
};

export const PlayerFeatureBlock = ({
  title,
  value,
}: PlayerFeatureBlockProps) => {
  return (
    <div className="pb-4 border-b border-frieza last:border-b-0">
      <div className="flex items-center justify-between text-sm font-semibold gap-3">
        <span>{title}</span>
        <span>{value}</span>
      </div>
      <Progress value={+value} className="mt-1.5 h-[2px]" />
    </div>
  );
};
