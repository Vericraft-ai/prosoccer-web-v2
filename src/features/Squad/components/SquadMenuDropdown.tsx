import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/blocks/components/Select";

export const SquadMenuDropdown = () => {
  return (
    <Select defaultValue="next-match">
      <SelectTrigger className="w-full md:w-[128px] lg:w-[214px] h-10">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="next-match">Next match</SelectItem>
          <SelectItem value="AXL">AXL</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
