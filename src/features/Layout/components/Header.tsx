import { Web3AuthButton } from "@/features/Auth/component/Web3AuthButton";

type HeaderProps = {
  children?: React.ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
  return (
    <div className="flex justify-between">
      {children}
      <Web3AuthButton />
    </div>
  );
};
