import { cn } from "@/blocks/utils/cn";
import { Sidebar } from "./Sidebar";
import { MobileNav } from "./MobileNav";

export const Wrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("bg-bulma  min-h-screen", className)}>
      <div className="flex max-w-[1440px] mx-auto">
        <Sidebar />
        <main className="mb-[82px] lg:mb-0 lg:ml-[268px] px-5 md:px-10 pb-8 pt-6 lg:pt-[3.625rem] lg:pl-[1.875rem] lg:pr-[4.375rem] w-full">
          {children}
        </main>
        <MobileNav />
      </div>
    </div>
  );
};
