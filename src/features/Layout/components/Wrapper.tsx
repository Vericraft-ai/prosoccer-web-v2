import { cn } from "@/blocks/utils/cn";
import { Sidebar } from "./Sidebar";

export const Wrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(className, "bg-bulma w-full flex min-h-screen")}>
      <Sidebar />
      {children}
    </div>
  );
};
