import { insertSorted, parseInput } from "./helpers.ts";

performance.mark("start");
const [firstLocations, secondLocations]: [number[], number[]] = [[], []];
await parseInput((line) => {
  const [left, right] = line
    .trim()
    .split("   ")
    .map((s) => parseInt(s));

  insertSorted(firstLocations, left);
  insertSorted(secondLocations, right);
});

const result = secondLocations.reduce((acc, _, i) => {
  acc += Math.abs(firstLocations[i] - secondLocations[i]);
  return acc;
}, 0);

performance.mark("end");

const duration = Math.trunc(
  performance.measure("duration", "start", "end").duration
);
console.log("Found result", result, "in", duration, "ms");
