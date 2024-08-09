import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Label } from "../ui/label";
import { activeManagers } from "@/data/activeManagers";
import data from "../../data/data.json";
import { CheckEmoji, XEmoji } from "../icons/Icons";

const PastPerformance = () => {
  const [manager, setManager] = React.useState(activeManagers[8]);

  const performance = data.standings.filter((row) => row.manager === manager);

  const totalWins = performance.reduce(function (prev, current) {
    return prev + current.wins;
  }, 0);

  const totalLosses = performance.reduce(function (prev, current) {
    return prev + current.losses;
  }, 0);

  const totalTies = performance.reduce(function (prev, current) {
    return prev + current.ties;
  }, 0);

  return (
    <div className="flex flex-col gap-2">
      <Label className="text-md">Past Performance</Label>
      <div className="flex items-center gap-4">
        <Label>Manager:</Label>
        <Select value={manager} onValueChange={(value) => setManager(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue defaultValue={manager} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {activeManagers.map((manager) => (
                <SelectItem key={manager} value={manager}>
                  {manager}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Table className="border bg-background">
        <TableHeader>
          <TableRow>
            <TableHead>Year</TableHead>
            <TableHead>Rank</TableHead>
            <TableHead>Record</TableHead>
            <TableHead>Playoffs</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {performance.map((row, index) => (
            <TableRow key={index}>
              <TableCell className="py-2">{row.year}</TableCell>
              <TableCell className="py-2">{row.rank}</TableCell>
              <TableCell className="py-2">
                {row.wins}-{row.losses}-{row.ties}
              </TableCell>
              <TableCell className="py-2">
                {row["clinched playoffs"] === "Y" ? <CheckEmoji /> : <XEmoji />}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2} className="py-2">
              Overall Record
            </TableCell>
            <TableCell colSpan={2} className="py-2 text-left">
              {totalWins}-{totalLosses}-{totalTies}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default PastPerformance;
