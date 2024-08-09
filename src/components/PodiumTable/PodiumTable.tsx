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

const PodiumTable = () => {
  const [stats] = React.useState(data.statistics["top_three_finishes"]);
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PodiumTable;
