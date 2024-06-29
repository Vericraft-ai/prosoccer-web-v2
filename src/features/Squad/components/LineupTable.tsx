import { Progress } from "@/blocks/components/Progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/blocks/components/Table";
import { RoleBadge } from "@/features/Shared/components/RoleBadge";
import lineups from "@/mocks/LineUpData.json";
import { GripVertical } from "lucide-react";

export const LineupTable = () => {
  const heads = [
    "Line Up",
    "Players",
    "S.Role",
    "S.A",
    "Quality",
    "Age",
    "Condition",
  ];
  return (
    <div className="border border-c6/[0.26]">
      <Table>
        <TableHeader>
          <TableRow className="odd:bg-tagoma text-xs">
            {heads.map((head) => (
              <TableHead
                className="first:px-2.5 text-left px-4 last:text-center whitespace-nowrap last:pr-2.5"
                key={head}
              >
                {head}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="text-frieza text-sm">
          {lineups.map((l) => (
            <TableRow key={l.id} className="bg-piccolo">
              <TableCell className="px-2.5 border-t-[0.91px] border-c6/[0.26]">
                <div className="flex items-center gap-1">
                  <button>
                    <GripVertical className="w-3 h-3" />
                  </button>
                  <span>12</span>
                </div>
              </TableCell>
              <TableCell className="px-4 text-left border-t-[0.91px] border-c6/[0.26] whitespace-nowrap">
                {l.name}
              </TableCell>
              <TableCell className="px-4  border-t-[0.91px] border-c6/[0.26]">
                <RoleBadge role="RB" />
              </TableCell>
              <TableCell className="px-4 border-t-[0.91px] border-c6/[0.26]">
                0
              </TableCell>
              <TableCell className="px-4 border-t-[0.91px] border-c6/[0.26]">
                42/30
              </TableCell>
              <TableCell className="px-4 border-t-[0.91px] border-c6/[0.26]">
                35
              </TableCell>
              <TableCell className="px-2.5 border-t-[0.91px] border-c6/[0.26]">
                <div className="flex flex-col items-center">
                  <span className="text-center">100</span>
                  <Progress value={100} className="h-1" />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
