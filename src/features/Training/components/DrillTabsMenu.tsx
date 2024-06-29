import { cn } from "@/blocks/utils/cn";
import { Check } from "lucide-react";

type Props = {
  activePage: "drills" | "players" | "results";
};

export const DrillTabsMenu = ({ activePage }: Props) => {
  return (
    <nav className="flex items-center gap-2 md:gap-4">
      <MenuItem
        title="Select a drill"
        status={activePage === "drills" ? "active" : "completed"}
      />
      <div className="bg-frieza h-[2px] w-[52px] md:w-[110px]" />
      <MenuItem
        title="Select Player"
        className="flex-row-reverse"
        status={activePage === "players" ? "active" : "inactive"}
      />
    </nav>
  );
};

type MenuItemProps = {
  title: string;
  className?: string;
  status?: "active" | "inactive" | "completed";
};

export const MenuItem = ({
  title,
  className,
  status = "active",
}: MenuItemProps) => {
  return (
    <div className={cn("flex gap-2 items-center", className)}>
      <div
        className={cn(
          "rounded-full w-4 h-4 md:w-8 md:h-8 border md:border-2 border-vegeta flex justify-center items-center",
          {
            "border-frieza": status === "inactive",
            "bg-vegeta": status === "completed",
          }
        )}
      >
        {status === "active" && (
          <div className="rounded-full w-1.5 h-1.5 md:w-2.5 md:h-2.5 bg-vegeta" />
        )}
        {status === "completed" && <Check className="w-2 h-2 md:w-4 md:h-4" />}
      </div>
      <span
        className={cn("text-vegeta text-xs md:text-base", {
          "text-frieza": status === "inactive",
        })}
      >
        {title}
      </span>
    </div>
  );
};
