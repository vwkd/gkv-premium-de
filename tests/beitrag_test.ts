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

    const beitragssatz = premium.beitragssatz();

    const [min, max] = premium.bemessungsgrenzen();
    const mid = (min + max) / 2;

    assertEquals(premium.beitrag(0), beitragssatz * min);
    assertEquals(premium.beitrag(min - 1), beitragssatz * min);
    assertEquals(premium.beitrag(min), beitragssatz * min);
    assertEquals(premium.beitrag(mid), beitragssatz * mid);
    assertEquals(
      premium.beitrag(max),
      beitragssatz * max,
    );
    assertEquals(
      premium.beitrag(max + 1),
      beitragssatz * max,
    );
    assertEquals(premium.beitrag(1_000_000), beitragssatz * max);
  });
}
