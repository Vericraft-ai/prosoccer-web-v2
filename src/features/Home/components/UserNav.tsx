import { CoinIcon } from "@/blocks/icons/CoinIcon";
import { WalletIcon } from "@/blocks/icons/WalletIcon";
import { UserMenu } from "@/features/Layout/components/UserMenu";
import Image from "next/image";

export const UserNav = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-1">
        <CoinIcon className="w-[18px] h-[18px] md:w-[27px] md:h-[27px]" />
        <span className="font-semibold text-xs md:text-base">0</span>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <Image
          src="/images/idezia.png"
          alt="logo"
          width={37}
          height={37}
          className="shrink-0 w-[22.5px] h-[22.5px] md:w-[37px] md:h-[37px]"
        />
        <UserMenu>
          <button className="text-start whitespace-nowrap">
            <p className="text-xs lg:text-sm">Welcome back👋</p>
            <p className="font-semibold">BlackPride</p>
          </button>
        </UserMenu>
      </div>
      <button>
        <WalletIcon />
      </button>
    </div>
  );
};
