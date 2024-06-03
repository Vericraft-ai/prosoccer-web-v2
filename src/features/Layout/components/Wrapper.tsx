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
    <div className={cn("bg-bulma  min-h-screen", className)}>
      <div className="flex max-w-screen-[1440px] mx-auto">
        <Sidebar />
        <main className="ml-[268px] pt-[3.625rem] px-[1.875rem]">
          {children}
        </main>
      </div>
    </div>
  );
};
