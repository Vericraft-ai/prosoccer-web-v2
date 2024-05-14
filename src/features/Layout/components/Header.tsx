import { Web3AuthButton } from "@/features/Auth/component/Web3AuthButton";
import { SearchInput } from "./SearchInput";
import { HeaderBanner } from "./HeaderBanner";

type HeaderProps = {
  children?: React.ReactNode;
  hasSearchBar?: boolean;
};

export const Header = ({ children, hasSearchBar }: HeaderProps) => {
  return (
    <div className="flex flex-col w-full mx-8 my-12">
      {children}
      {hasSearchBar && (
        <div className="flex flex-row justify-between w-full space-x-6">
          <SearchInput onSearch={(query) => console.log(query)} />
          <Web3AuthButton />
        </div>
      )}
      {!hasSearchBar && <Web3AuthButton />}
      <HeaderBanner />
    </div>
  );
};
