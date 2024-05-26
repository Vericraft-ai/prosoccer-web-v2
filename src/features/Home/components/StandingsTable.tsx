import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/blocks/components/Table";
import standingsResultMock from "@/mocks/StandingsData.json";
import Image from "next/image";

export const StandingsTable = () => {
  return (
    <Table className="text-broly">
      <TableHeader>
        <TableRow className="!border-0">
          <TableHead>Club</TableHead>
          <TableHead>Points</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {standingsResultMock?.map((standing) => (
          <TableRow
            key={standing.id}
            className="border-none rounded-xl bg-piccolo flex flex-row w-full my-3 p-3"
          >
            <TableCell width={50} className="font-medium text-center ">
              {standing.id + "."}
            </TableCell>
            <TableCell width={50} className="font-medium text-center">
              {
                <Image
                  src={"/TeamLogo.svg"}
                  alt="logo"
                  className="w-8 h-8"
                  width={50}
                  height={50}
                />
              }
            </TableCell>
            <TableCell className="font-medium text-center">
              {standing.team_name}
            </TableCell>
            <TableCell className="text-right flex-grow">
              {standing.points}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
