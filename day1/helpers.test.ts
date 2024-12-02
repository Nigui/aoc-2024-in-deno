import { assertEquals } from "jsr:@std/assert";
import { insertSorted } from "./helpers.ts";

Deno.test(
  "insertSorted - should insert after when one item and same value",
  () => {
    const input = [3];
    insertSorted(input, 3);

    assertEquals(input, [3, 3]);
  }
);
