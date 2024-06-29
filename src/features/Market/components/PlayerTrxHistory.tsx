import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/blocks/components/Table";
import { CoinIcon } from "@/blocks/icons/CoinIcon";
import trxs from "@/mocks/playerTrxHistory.json";

export const PlayerTrxHistory = () => {
  const heads = ["Event", "Price", "From", "To", "Date"];
  return (
    <div className="border border-c6/[0.26]">
      <Table>
        <TableHeader>
          <TableRow className="odd:bg-tagoma text-xs">
            {heads.map((head) => (
              <TableHead
                className="first:px-2.5 first:w-[100px] text-left px-4 last:text-center whitespace-nowrap last:pr-2.5"
                key={head}
              >
                {head}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="text-frieza text-sm">
          {trxs.map((trx) => (
            <TableRow key={trx.id} className="bg-piccolo">
              <TableCell className="px-2.5 border-t-[0.91px] border-c6/[0.26]">
                <span>{trx.event}</span>
              </TableCell>
              <TableCell className="px-4 text-left border-t-[0.91px] border-c6/[0.26] whitespace-nowrap">
                <div className="flex items-center gap-1">
                  <CoinIcon className="w-6 h-6" />
                  <span>{trx.price}</span>
                </div>
              </TableCell>
              <TableCell className="px-4  border-t-[0.91px] border-c6/[0.26]">
                {trx.from}
              </TableCell>
              <TableCell className="px-4 border-t-[0.91px] border-c6/[0.26]">
                {trx.to}
              </TableCell>
              <TableCell className="px-4 border-t-[0.91px] border-c6/[0.26] text-center">
                {trx.date}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
