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

const PlayoffAppearanceTable = () => {
  const [stats] = React.useState(data.statistics["playoff_appearances"]);
  return (
    <div className="flex flex-col gap-2">
      <Label className="text-md">Playoff Appearances</Label>
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
