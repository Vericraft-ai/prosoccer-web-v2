import { Button } from "@/blocks/components/Button";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHeader,
  TableHead,
} from "@/blocks/components/Table";
import { MatchDetailModal } from "./MatchDetailModal";
import Image from "next/image";
import lineups from "@/mocks/LineUpData.json";
import { FlashIcon } from "@/blocks/icons/FlashIcon";

export const LineupTable = () => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow className="odd:bg-tagoma">
            <TableHead className="px-2.5">Line Up</TableHead>
            <TableHead className="text-left px-0">Players</TableHead>
            <TableHead className="px-0">
              <div className="flex justify-end w-full">
                <FlashIcon />
              </div>
            </TableHead>
            <TableHead className="text-right">Rating</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-frieza">
          {lineups.map((l) => (
            <TableRow key={l.id} className="bg-piccolo">
              <TableCell className="px-2.5 border-t-[0.91px] border-c6/[0.26]">
                <div className="flex items-center gap-1">
                  <span>12</span>{" "}
                  <span className="text-quitela font-semibold">
                    {l.position}
                  </span>
                </div>
              </TableCell>
              <TableCell className="px-0 text-left border-t-[0.91px] border-c6/[0.26]">
                {l.name}
              </TableCell>
              <TableCell className="px-0 text-right border-t-[0.91px] border-c6/[0.26]">
                {l.form}
              </TableCell>
              <TableCell className="text-right px-2.5 border-t-[0.91px] border-c6/[0.26]">
                {l.rating}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
