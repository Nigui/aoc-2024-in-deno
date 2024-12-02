import { TextLineStream } from "jsr:@std/streams@1.0.8";

export async function parseInput(onLine: (line: string) => void) {
  const file = await Deno.open("./day1/input.txt");

  const lineStream = file.readable
    .pipeThrough(new TextDecoderStream())
    .pipeThrough(new TextLineStream());

  for await (const line of lineStream) {
    onLine(line);
  }
}

export function insertSorted(array: number[], value: number) {
  let start = 0;
  let end = array.length - 1;
  if (end >= 0) {
    do {
      const i = Math.floor((start + end) / 2);
      if (array[i] == value) {
        end = i;
        break;
      } else if (array[i] < value) start = i + 1;
      else end = i - 1;
    } while (start <= end);
  }

  array.splice(end + 1, 0, value);
}
