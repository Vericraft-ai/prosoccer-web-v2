import React from "react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableRow
} from "@/blocks/components/Table";
import topScorersData from "@/mocks/TopScorerData.json";
import { Badge } from "@/blocks/components/Badge";
import Image from "next/image";

export const TopScorerBlock = () => {
  return (
    <div className="mt-10 ">
      <div className="flex flex-row justify-between w-full">
        <span className="text-broly">Top Scorer</span>
        <Link href="/" className="text-vegeta">
          View all
        </Link>
      </div>

      <Table className="text-broly mt-4 border border-zeno/50 rounded-2xl border-separate">
        <TableBody className="">
          {topScorersData?.map((player) => (
            <TableRow
              key={player.player_id}
              className="border-none my-3 p-3 block w-full justify-between items-center"
            >
              <TableCell className="font-medium text-center">
                {player.player_id}
              </TableCell>
              <TableCell className="font-medium ">
                {
                  <Image
                    src="/GenericJersey.svg"
                    alt="jersey"
                    width={30}
                    height={30}
                  />
                }
              </TableCell>
              <TableCell className="font-medium text-left ">
                <div className="flex flex-col">
                  <span>{player.player_name}</span>
                  <span>
                    {player.team_name} | {player.matches_played}
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <Badge className="bg-vegeta p-3 h-[30px] w-[40px]">
                  {player.goals_scored}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
