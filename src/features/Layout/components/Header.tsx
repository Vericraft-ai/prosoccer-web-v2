import { Web3AuthButton } from "@/features/Auth/component/Web3AuthButton";
import { SearchInput } from "./SearchInput";
import { HeaderBanner } from "../../Home/components/HeaderBanner";

type HeaderProps = {
  children?: React.ReactNode;
  hasSearchBar?: boolean;
};

export const Header = ({ children, hasSearchBar }: HeaderProps) => {
  return (
    <div className="flex w-full px-8 py-12">
      {hasSearchBar && (
        <div className="flex flex-row justify-between w-full space-x-6">
          <SearchInput onSearch={(query) => console.log(query)} />
          <Web3AuthButton />
        </div>
      )}
      {!hasSearchBar && (
        <div className="flex flex-row justify-between w-full space-x-6">
          {children}
          <Web3AuthButton />
        </div>
      )}
    </div>
  );
};
