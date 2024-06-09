import { Button } from "@/blocks/components/Button";
import Image from "next/image";

type Props = {
  src: string;
  name: string;
  position: string;
  matches: number;
  goals: number;
  rank: number;
};

export const PlayerScoreCard = ({
  name,
  src,
  matches,
  position,
  goals,
  rank,
}: Props) => {
  return (
    <div className="flex justify-between items-center py-2.5">
      <div className="flex items-center">
        <p className="text-lg font-medium">{rank}</p>
        <Image
          src={src}
          alt={name}
          width={44}
          height={44}
          className="ml-2.5 mr-4"
        />
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm">
            {position} | {matches} Matches
          </p>
        </div>
      </div>

      <Button size={"score"}>{goals}</Button>
    </div>
  );
};
