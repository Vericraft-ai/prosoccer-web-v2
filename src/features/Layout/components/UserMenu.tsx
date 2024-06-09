import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/blocks/components/popover";
import { AssetIcon } from "@/blocks/icons/AssetIcon";
import { CopyIcon } from "@/blocks/icons/CopyIcon";
import { DiscordIcon } from "@/blocks/icons/DiscordIcon";
import { ExitIcon } from "@/blocks/icons/ExitIcon";
import { UserIcon } from "@/blocks/icons/UserIcon";

type Props = {
  children?: React.ReactNode;
};

export const UserMenu = ({ children }: Props) => {
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-[243px] bg-popo border-none rounded-lg p-0 text-sm">
        <div className="rounded-lg overflow-hidden">
          <div className="pl-4 py-2.5 pr-8 border-b-[0.2px] border-frieza">
            <div className="flex items-center gap-4">
              <UserIcon className="shrink-0" />
              <div>
                <p className="text-sm">User ID</p>
                <p className="text-xs text-frieza">XXW...235</p>
              </div>
              <button className="ml-auto hover:bg-piccolo p-2 rounded-lg">
                <CopyIcon />
              </button>
            </div>
          </div>
          <button className="flex items-center gap-4 hover:bg-piccolo pl-4 py-2.5 pr-8 border-b-[0.2px] border-frieza w-full">
            <DiscordIcon />
            <span>Connect discord</span>
          </button>
          <button className="flex items-center gap-4 hover:bg-piccolo pl-4 py-2.5 pr-8 border-b-[0.2px] border-frieza w-full">
            <AssetIcon />
            <span>Asset</span>
          </button>
          <button className="flex items-center gap-4 hover:bg-piccolo pl-4 pb-6 pt-2.5 pr-8 w-full">
            <ExitIcon />
            <span>Disconnect</span>
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
};
