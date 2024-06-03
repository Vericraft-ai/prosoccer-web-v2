import { Web3AuthButton } from "@/features/Auth/component/Web3AuthButton";
import { SearchInput } from "./SearchInput";

type HeaderProps = {
  children?: React.ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
  return (
    <div className="flex w-full">
      <div className="flex flex-row justify-between w-full items-center space-x-6">
        {children}
        <Web3AuthButton />
      </div>
    </div>
  );
};
