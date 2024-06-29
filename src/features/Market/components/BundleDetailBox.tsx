import { cn } from "@/blocks/utils/cn";

type Props = {
  items: {
    title: string;
    value: string | number;
  }[];
  className?: string;
};

export const BundleDetailBox = ({ items, className }: Props) => {
  return (
    <div className="border border-frieza rounded-xl flex py-2.5 px-4 gap-1.5 lg:gap-3 bg-white/5">
      {items.map((item, index) => (
        <>
          <div
            className={cn(
              "flex flex-col gap-3 min-w-11 lg:min-w-20 justify-between",
              className
            )}
            key={index}
          >
            <span className="text-xs whitespace-nowrap">{item.title}</span>
            <span className="text-sm lg:text-base whitespace-nowrap">
              {item.value}
            </span>
          </div>
          <div className="border-l border-frieza last:hidden" />
        </>
      ))}
    </div>
  );
};
