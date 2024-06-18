import Image from "next/image";
import { cn } from "@/blocks/utils/cn";

type Props = {
  className?: string;
  src: string;
  alt?: string;
  name: string;
  logoClassName?: string;
  teamType?: "country" | "club";
  logoSize?: number;
};

export const TeamEmblem = ({
  className,
  src,
  alt,
  name,
  logoClassName,
  logoSize = 24,
  teamType = "club",
}: Props) => {
  return (
    <div
      className={cn("flex items-center gap-2 text-lg font-medium", className)}
    >
      <div
        className={cn(
          "relative h-9 w-9 flex justify-center items-center bg-slate-300 rounded-full",
          logoClassName
        )}
      >
        <Image
          src={src}
          alt={alt || name}
          width={teamType === "country" ? undefined : logoSize}
          height={teamType === "country" ? undefined : logoSize}
          fill={teamType === "country"}
          className="rounded-full object-cover"
        />
      </div>
      <span>{name}</span>
    </div>
  );
};
