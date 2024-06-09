import Image from "next/image";

type Props = {
  className?: string;
  src: string;
  alt?: string;
  name: string;
  logoBgColor?: string;
};

export const TeamEmblem = ({
  className,
  src,
  alt,
  name,
  logoBgColor,
}: Props) => {
  return (
    <div className="flex items-center gap-2">
      <div className="h-9 w-9 flex justify-center items-center bg-slate-300 rounded-full">
        <Image
          src={src}
          alt={alt || name}
          width={24}
          height={24}
          className="w-6 h-6 rounded-full"
        />
      </div>
      <span className="text-lg font-medium">{name}</span>
    </div>
  );
};
