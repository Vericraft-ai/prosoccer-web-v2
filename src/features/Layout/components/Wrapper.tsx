import { cn } from "@/blocks/utils/cn";

export const Wrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn(className, "bg-bulma")}>{children}</div>;
};
