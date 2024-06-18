import { Button } from "@/blocks/components/Button";
import {
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/blocks/components/Table";
import Image from "next/image";
import matches from "@/mocks/MatchData.json";
import { MatchDetailModal } from "./MatchDetailModal";

export const MatchesTable = () => {
  return (
    <div>
      <Table>
        <TableBody className="">
          {matches.map((m) => (
            <TableRow key={m.matchId}>
              <TableCell className="rounded-s-lg">
                <div className="flex items-center gap-4">
                  <Image
                    src={m.homeTeamIcon}
                    width={32}
                    height={32}
                    alt="team logo"
                    className="rounded-full object-cover"
                  />
                  <span>{m.homeTeam}</span>
                </div>
              </TableCell>
              <TableCell className="text-center">
                <Button className="h-8">
                  {m.homeTeamScore}-{m.awayTeamScore}
                </Button>
              </TableCell>
              <TableCell className="">
                <div className="flex items-center gap-4 justify-end">
                  <span>{m.awayTeam}</span>
                  <Image
                    src={m.awayTeamIcon}
                    width={32}
                    height={32}
                    alt="team logo"
                    className="rounded-full object-cover"
                  />
                </div>
              </TableCell>
              <TableCell className="text-right rounded-e-lg">
                <MatchDetailModal matchId={m.matchId} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
