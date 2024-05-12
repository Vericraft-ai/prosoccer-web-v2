import { Web3AuthButton } from "@/features/Auth/component/Web3AuthButton";
import { SearchInput } from "./SearchInput";

type HeaderProps = {
  children?: React.ReactNode;
  hasSearchBar?: boolean;
};

export const Header = ({ children, hasSearchBar }: HeaderProps) => {
  return (
    <div className="flex justify-between w-full mx-8 my-12 space-x-6">
      {children}
      {hasSearchBar && (
        <>
          <SearchInput onSearch={(query) => console.log(query)} />
          <Web3AuthButton />
        </>
      )}
      {!hasSearchBar && <Web3AuthButton />}
    </div>
  );
};
