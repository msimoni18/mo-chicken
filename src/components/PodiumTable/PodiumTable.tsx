import React from "react";
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
} from "../ui/table";
import {
  FirstPlaceTrophy,
  SecondPlaceTrophy,
  ThirdPlaceTrophy,
} from "../icons/Icons";
import data from "../../data/data.json";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";
import { numberWithCommas } from "@/lib/utils";

type Podium = {
  manager: string;
  first: number;
  second: number;
  third: number;
  total: number;
  "total seasons": number;
  profit: number;
};

const PodiumTable = () => {
  const [stats, setStats] = React.useState<Podium[] | null>(null);

  React.useEffect(() => {
    // Sorting by total trophies, first, then second, then third
    const s = data.statistics["top_three_finishes"].sort((a, b) => {
      // First sort by 'total' value
      if (b.total !== a.total) {
        return b.total - a.total;
      }
      // First sort by 'first' value
      if (b.first !== a.first) {
        return b.first - a.first;
      }
      // If 'first' is the same, sort by 'second'
      if (b.second !== a.second) {
        return b.second - a.second;
      }
      // If 'second' is also the same, sort by 'third'
      return b.third - a.third;
    });

    setStats(s);
  }, []);

  if (!stats) return null;

  return (
    <div className="flex flex-col gap-2">
      <Label className="text-md">Trophies</Label>
      <Table className="border bg-background">
        <TableHeader>
          <TableRow>
            <TableHead>Manager</TableHead>
            <TableHead>
              <FirstPlaceTrophy />
            </TableHead>
            <TableHead>
              <SecondPlaceTrophy />
            </TableHead>
            <TableHead>
              <ThirdPlaceTrophy />
            </TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Seasons</TableHead>
            <TableHead>Profit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stats.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.manager}</TableCell>
              <TableCell>{row.first}</TableCell>
              <TableCell>{row.second}</TableCell>
              <TableCell>{row.third}</TableCell>
              <TableCell>{row.total}</TableCell>
              <TableCell>{row["total seasons"]}</TableCell>
              <TableCell
                className={cn(
                  "flex justify-between",
                  row.profit > 0
                    ? "text-green-500"
                    : row.profit < 0
                    ? "text-red-500"
                    : ""
                )}
              >
                <div>$</div>
                <div>{numberWithCommas(row.profit)}</div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PodiumTable;
