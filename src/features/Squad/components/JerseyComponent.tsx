import Image from "next/image";

type Props = {
  playerNumber: number;
  jerseyImage?: string;
  playerName: string;
  position: string;
};

export const JerseyComponent = ({
  playerNumber,
  jerseyImage,
  playerName,
  position,
}: Props) => {
  return (
    <div>
      <div className="flex border-b-[2.15px] border-vegeta">
        <span className="self-end">{playerNumber}</span>
        <Image
          src={jerseyImage ?? "/images/jersey.svg"}
          alt="jersey"
          width={29}
          height={42}
        />
      </div>
      <p className="text-xs whitespace-nowrap mt-1">{playerName}</p>
      <p className="text-xs text-center text-[#E726F7]">{position}</p>
    </div>
  );
};
