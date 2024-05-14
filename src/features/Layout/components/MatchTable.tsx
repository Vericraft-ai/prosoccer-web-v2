import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow
} from "@/blocks/components/Table";
import matchResultMock from "@/mocks/MatchData.json";

export const MatchTable = () => {
  return (
    <Table className="text-broly">
      <TableBody className="">
        {matchResultMock?.map((match) => (
          <div className="flex flex-row w-full">
            <TableRow
              key={match.matchId}
              className="border-none odd:rounded-xl odd:bg-piccolo w-full my-3 p-3 flex justify-between"
            >
              <TableCell className="font-medium text-center ">
                {match.homeTeam}
              </TableCell>
              <TableCell className="bg-vegeta rounded-lg text-center justify-center w-24">
                {match.homeTeamScore}
                <span>-</span>
                {match.awayTeamScore}
              </TableCell>
              <TableCell className="text-center ">{match.awayTeam}</TableCell>
              <TableCell className="bg-zeno rounded-lg text-center justify-center w-24">
                {"Full-Time"}
              </TableCell>
            </TableRow>
          </div>
        ))}
      </TableBody>
    </Table>
  );
};
