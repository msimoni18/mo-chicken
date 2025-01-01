import React from "react";
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
} from "../ui/table";
import data from "../../data/data.json";
import { Label } from "../ui/label";

type Appearances = {
  manager: string;
  count: number;
  "total seasons": number;
  percentage: string;
};

const PlayoffAppearanceTable = () => {
  const [stats, setStats] = React.useState<Appearances[] | null>(null);

  React.useEffect(() => {
    const s = data.statistics["playoff_appearances"]
      .filter((row) => row.count >= 5)
      .sort((a, b) => {
        if (a.percentage !== b.percentage) {
          return b.percentage - a.percentage;
        }
        return b.count - a.count;
      });

    setStats(s);
  }, []);

  if (!stats) return null;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Label className="text-md">Playoff Appearances</Label>
        <Label className="text-sm text-muted-foreground">
          (Minimum 5 seasons)
        </Label>
      </div>
      <Table className="border bg-background">
        <TableHeader>
          <TableRow>
            <TableHead>Manager</TableHead>
            <TableHead>Appearances</TableHead>
            <TableHead>Seasons</TableHead>
            <TableHead>Percentage</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stats.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.manager}</TableCell>
              <TableCell>{row.count}</TableCell>
              <TableCell>{row["total seasons"]}</TableCell>
              <TableCell>{row.percentage}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PlayoffAppearanceTable;
