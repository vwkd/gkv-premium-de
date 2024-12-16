import { assertEquals } from "@std/assert";
import { parameters } from "../src/data.ts";
import { Premium } from "../src/main.ts";

const years = parameters
  .map((p) => p.year);

for (const year of years) {
  Deno.test(`${year}`, () => {
    const parameter = parameters.find((p) => p.year == year)!;
    const premium = new Premium(parameter);

    const rate = premium.rates
      .reduce((acc, curr) => acc + curr, 0);

    assertEquals(premium.rate(), rate);
  });
}
