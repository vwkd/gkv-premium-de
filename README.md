# README

GKV Beitragsrechner für Deutschland



## Funktionen

- berechne Beitrag, Beitragssatz und Bemessungsgrundlage für zu versteuerndes Einkommen



## Benutzung

```ts
import { Premium } from "@vwkd/gkv-premium-de";

const jahr = 2020;
const zvE = 12_740;

const premium = new Premium(jahr);

console.log(premium.base(zvE)); // 12740
console.log(premium.amount(zvE)); // 2388.75
console.log(premium.rate()); // 0.1875
```
