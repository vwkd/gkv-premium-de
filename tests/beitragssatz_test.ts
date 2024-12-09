import { assertEquals } from "@std/assert";
import { parameters } from "../src/data.ts";
import { Premium } from "../src/main.ts";

const years = parameters
  .map((p) => p.jahr);

for (const year of years) {
  Deno.test(`${year}`, () => {
    const parameter = parameters.find((p) => p.jahr == year)!;
    const premium = new Premium(parameter);

    const beitragssatz = premium.beitragssätze()
      .reduce((acc, curr) => acc + curr, 0);

    assertEquals(premium.beitragssatz(), beitragssatz);
  });
}
