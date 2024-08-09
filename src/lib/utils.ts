import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getMax(arr: object[], key: string) {
  const max = arr.reduce((prev, current) =>
    prev && prev[key] > current[key] ? prev : current
  );

  return max;
}

export function getMin(arr: object[], key: string) {
  const min = arr.reduce((prev, current) =>
    prev && prev[key] < current[key] ? prev : current
  );

  return min;
}
