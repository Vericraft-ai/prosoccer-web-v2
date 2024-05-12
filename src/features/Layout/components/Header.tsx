import { Web3AuthButton } from "@/features/Auth/component/Web3AuthButton";

type HeaderProps = {
  children?: React.ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
  return (
    <div className="flex justify-between w-full mx-8 my-12">
      {children}
      <Web3AuthButton />
    </div>
  );
};
