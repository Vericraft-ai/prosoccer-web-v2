import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/blocks/components/Select";
import { cn } from "@/blocks/utils/cn";

type Props = {
  options: string[];
  className?: string;
};

export const Dropdown = ({ options, className }: Props) => {
  return (
    <Select defaultValue={options[0]}>
      <SelectTrigger
        className={cn("w-full md:w-[128px] lg:w-[214px] h-10", className)}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem value={option} key={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
