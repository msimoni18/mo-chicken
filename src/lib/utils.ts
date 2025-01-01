import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { SeasonTotal, WeeklyTotal } from "@/components/Records/Records";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getMax(arr: SeasonTotal[] | WeeklyTotal[], key: string) {
  const max = arr.reduce((prev, current) =>
    prev && prev[key] > current[key] ? prev : current
  );

  return max;
}

export function getMin(arr: SeasonTotal[] | WeeklyTotal[], key: string) {
  const min = arr.reduce((prev, current) =>
    prev && prev[key] < current[key] ? prev : current
  );

  return min;
}

export function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
