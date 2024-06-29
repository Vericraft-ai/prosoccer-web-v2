import { LogoOnly } from "@/blocks/icons/LogoOnly";
import { UserNav } from "@/features/Home/components/UserNav";
import { HeaderDropdown } from "./HeaderDropdown";

type HeaderProps = {
  search?: boolean;
  children?: React.ReactNode;
};

export const SquadHeader = ({ search, children }: HeaderProps) => {
  return (
    <div className="flex w-full">
      <div className="flex flex-col-reverse lg:flex-row justify-between w-full items-center gap-10 lg:gap-0">
        <div className="hidden lg:block">
          <HeaderDropdown />
        </div>
        <div className="flex items-center gap-2.5 md:gap-11 justify-between lg:justify-end lg:self-end w-full">
          <LogoOnly className="lg:hidden shrink-0" />
          <div className="flex items-center gap-2 md:gap-11">
            <UserNav />
            <div className="lg:hidden">
              <HeaderDropdown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
