# README

GKV Beitragsrechner für Deutschland



## Funktionen

- berechne Beitrag, Beitragssatz und Bemessungsgrundlage für zu versteuerndes Einkommen



## Benutzung

```ts
import { parameters, Premium } from "@vwkd/gkv-premium-de";

const jahr = 2020;
const zvE = 12_740;

const parameter = parameters.find((s) => s.jahr == jahr);
const premium = new Premium(parameter);

console.log(premium.bemessungsgrundlage(zvE)); // 12740
console.log(premium.beitrag(zvE)); // 2388.75
console.log(premium.beitragssatz()); // 0.1875
```
