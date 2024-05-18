import { Web3AuthButton } from "@/features/Auth/component/Web3AuthButton";
import { SearchInput } from "./SearchInput";

type HeaderProps = {
  children?: React.ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
  return (
    <div className="flex w-full px-8 py-12">
      <div className="flex flex-row justify-between w-full space-x-6">
        {children}
        <Web3AuthButton />
      </div>
    </div>
  );
};
