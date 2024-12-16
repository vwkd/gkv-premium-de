import { assertEquals } from "@std/assert";
import { parameters } from "../src/data.ts";
import { Premium } from "../src/main.ts";

const years = parameters
  // todo: remove once filled in remaining `baseMin`
  .filter((p) => p.baseMin !== undefined)
  .map((p) => p.year);

for (const year of years) {
  Deno.test(`${year}`, () => {
    const parameter = parameters.find((p) => p.year == year)!;
    const premium = new Premium(parameter);

    const [min, max] = premium.baseBounds();
    const mid = (min + max) / 2;

    assertEquals(premium.base(0), min);
    assertEquals(premium.base(min - 1), min);
    assertEquals(premium.base(min), min);
    assertEquals(premium.base(mid), mid);
    assertEquals(premium.base(max), max);
    assertEquals(premium.base(max + 1), max);
    assertEquals(premium.base(1_000_000), max);
  });
}
