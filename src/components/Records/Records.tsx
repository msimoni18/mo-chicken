import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "../ui/label";
import data from "../../data/data.json";
import { getMax, getMin } from "@/lib/utils";
import { activeManagers } from "@/data/activeManagers";

const Records = () => {
  const seasonHighTotal = data.statistics["highest_season_total"].filter(
    (row) => activeManagers.includes(row.manager)
  );
  const weeklyHighTotal = data.statistics["highest_weekly_total"].filter(
    (row) => activeManagers.includes(row.manager)
  );
  const weeklyLowTotal = data.statistics["lowest_weekly_total"].filter((row) =>
    activeManagers.includes(row.manager)
  );

  const [seasonHigh] = React.useState<SeasonTotal | WeeklyTotal>(
    getMax(seasonHighTotal, "points for")
  );
  const [weeklyHigh] = React.useState<SeasonTotal | WeeklyTotal>(
    getMax(weeklyHighTotal, "points")
  );
  const [weeklyLow] = React.useState<SeasonTotal | WeeklyTotal>(
    getMin(weeklyLowTotal, "points")
  );

  return (
    <div>
      <Label className="text-md">League Records</Label>
      <div className="flex gap-2 flex-wrap">
        <Card>
          <CardHeader>
            <CardTitle>{seasonHigh["points for"]}</CardTitle>
            <CardDescription>Highest season total</CardDescription>
          </CardHeader>
          <CardContent className="w-[200px]">
            <div className="flex items-center justify-between">
              <p>Manager:</p>
              <p>{seasonHigh.manager}</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Year:</p>
              <p>{seasonHigh.year}</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Final Rank:</p>
              <p>{seasonHigh.rank}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>{weeklyHigh["points"]}</CardTitle>
            <CardDescription>Weekly high score</CardDescription>
          </CardHeader>
          <CardContent className="w-[200px]">
            <div className="flex items-center justify-between">
              <p>Manager:</p>
              <p>{weeklyHigh.manager}</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Year:</p>
              <p>{weeklyHigh.year}</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Week:</p>
              <p>{weeklyHigh.week}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>{weeklyLow["points"]}</CardTitle>
            <CardDescription>Weekly low score</CardDescription>
          </CardHeader>
          <CardContent className="w-[200px]">
            <div className="flex items-center justify-between">
              <p>Manager:</p>
              <p>{weeklyLow.manager}</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Year:</p>
              <p>{weeklyLow.year}</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Week:</p>
              <p>{weeklyLow.week}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Records;

export type SeasonTotal = {
  year: number;
  rank: number;
  manager: string;
  "points for": number;
  [key: string]: string | number;
};

export type WeeklyTotal = {
  year: number;
  week: number;
  team: string;
  points: number;
  "estimated points": number;
  manager: string;
  [key: string]: string | number;
};
