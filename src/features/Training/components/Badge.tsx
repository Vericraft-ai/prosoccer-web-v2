import { cn } from "@/blocks/utils/cn";

export const Badge = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex items-center px-2.5 h-5 text-[8px] lg:text-xs text-trunks bg-black",
        className
      )}
    >
      {title}
    </div>
  );
};
