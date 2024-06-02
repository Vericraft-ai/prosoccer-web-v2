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
      <TableBody>
        {matchResultMock?.map((match) => (
          <TableRow
            key={match.matchId}
            className="border-none odd:rounded-xl odd:bg-piccolo flex flex-row w-full my-3 p-3 justify-between items-center"
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
            <TableCell className="bg-zeno/15 rounded-lg text-center justify-center w-24">
              {"Full-Time"}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
