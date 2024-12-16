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

    const rate = premium.rate();

    const [min, max] = premium.baseBounds();
    const mid = (min + max) / 2;

    assertEquals(premium.amount(0), rate * min);
    assertEquals(premium.amount(min - 1), rate * min);
    assertEquals(premium.amount(min), rate * min);
    assertEquals(premium.amount(mid), rate * mid);
    assertEquals(premium.amount(max), rate * max);
    assertEquals(premium.amount(max + 1), rate * max);
    assertEquals(premium.amount(1_000_000), rate * max);
  });
}
