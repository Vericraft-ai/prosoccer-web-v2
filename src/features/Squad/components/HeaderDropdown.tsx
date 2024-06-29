import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/blocks/components/Select";

export function HeaderDropdown() {
  return (
    <Select defaultValue="BUC">
      <SelectTrigger className="w-[78px] md:w-[128px] lg:w-[214px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="BUC">BUC</SelectItem>
          <SelectItem value="AXL">AXL</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
