import { Web3AuthButton } from "@/features/Auth/component/Web3AuthButton";
import { SearchInput } from "./SearchInput";
import { UserNav } from "@/features/Home/components/UserNav";
import { Button } from "@/blocks/components/Button";
import { LogoOnly } from "@/blocks/icons/LogoOnly";

type HeaderProps = {
  search?: boolean;
  isConnected?: boolean;
  children?: React.ReactNode;
};

export const Header = ({ search, isConnected, children }: HeaderProps) => {
  return (
    <div className="flex w-full">
      <div className="flex flex-col-reverse lg:flex-row justify-between w-full items-center gap-10 lg:gap-0">
        {children}
        {search && <SearchInput onSearch={(query) => console.log(query)} />}
        <div className="flex items-center gap-6 lg:gap-11 justify-between lg:justify-end lg:self-end w-full">
          <LogoOnly className="lg:hidden shrink-0" />
          <div className="flex items-center gap-6 lg:gap-11">
            {isConnected && <UserNav />}
            {!isConnected && <Web3AuthButton />}
            {isConnected && <Button>Buy</Button>}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
