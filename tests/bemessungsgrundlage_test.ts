import { assertEquals } from "@std/assert";
import { parameters } from "../src/data.ts";
import { Premium } from "../src/main.ts";

const years = parameters
  // todo: remove once filled in remaining `bemessungsgrundlageMin`
  .filter((p) => p.bemessungsgrundlageMin !== undefined)
  .map((p) => p.jahr);

for (const year of years) {
  Deno.test(`${year}`, () => {
    const parameter = parameters.find((p) => p.jahr == year)!;
    const premium = new Premium(parameter);

    const [min, max] = premium.bemessungsgrenzen();
    const mid = (min + max) / 2;

    assertEquals(premium.bemessungsgrundlage(0), min);
    assertEquals(premium.bemessungsgrundlage(min - 1), min);
    assertEquals(premium.bemessungsgrundlage(min), min);
    assertEquals(premium.bemessungsgrundlage(mid), mid);
    assertEquals(
      premium.bemessungsgrundlage(max),
      max,
    );
    assertEquals(
      premium.bemessungsgrundlage(max + 1),
      max,
    );
    assertEquals(premium.bemessungsgrundlage(1_000_000), max);
  });
}
