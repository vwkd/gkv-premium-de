import type { Parameter } from "./types.ts";

import { parameters } from "./data.ts";

/**
 * GKV Beitragsrechner für Deutschland
 */
export class Premium {
  #year: number;
  #parameter: Parameter;

  /**
   * Erstelle GKV Beitragsrechner für Jahr
   *
   * @param year Jahr
   */
  constructor(year: number) {
    const parameter = parameters.find(({ year: y }) =>
      Array.isArray(y) ? y[0] <= year && year <= y[1] : y === year
    );

    if (parameter === undefined) {
      throw new Error(`Parameter for year '${year}' not found`);
    }

    this.#year = year;
    this.#parameter = parameter;
  }

  /**
   * Liste die Jahre
   *
   * @returns Liste der Jahre
   */
  static get years(): number[] {
    return parameters.flatMap(({ year }) =>
      Array.isArray(year)
        ? Array.from({ length: year[1] - year[0] + 1 }, (_, i) => year[0] + i)
        : year
    );
  }

  /**
   * Liste Jahr
   *
   * @returns Jahr
   */
  get year(): number {
    return this.#year;
  }

  /**
   * Liste Bemessungsgrenzen
   *
   * @returns Liste der Bemessungsgrenzen
   */
  get baseBounds(): [number, number] {
    return [
      this.#parameter.baseMin,
      this.#parameter.baseMax,
    ];
  }

  /**
   * Liste Beitragssätze
   *
   * @returns Liste der Beitragssätze
   */
  get rates(): number[] {
    return [
      this.#parameter.rate,
      this.#parameter.rateExtra,
      this.#parameter.rateAdditional,
      this.#parameter.rateCare,
    ].filter((satz) => satz !== undefined);
  }

  /**
   * Berechne Bemessungsgrundlage
   *
   * @params {number} zvE zu versteuerndes Einkommen, natürliche Zahl
   * @returns Bemessungsgrundlage
   */
  base(zvE: number): number {
    const min = this.#parameter.baseMin;
    const max = this.#parameter.baseMax;

    return Math.max(min, Math.min(max, zvE));
  }

  /**
   * Berechne Beitrag
   *
   * - gesamter Beitrag, Arbeitnehmer- und Arbeitgeberanteil
   *
   * @param {number} zvE zu versteuerndes Einkommen, natürliche Zahl
   * @returns {number} Beitrag
   */
  amount(zvE: number): number {
    return this.rate() * this.base(zvE);
  }

  /**
   * Berechne Beitragssatz
   *
   * @returns Beitragssatz
   */
  rate(): number {
    return this.rates
      .reduce((acc, satz) => (acc + satz), 0);
  }
}
