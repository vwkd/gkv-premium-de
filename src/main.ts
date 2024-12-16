import type { Parameter } from "./types.ts";

export { parameters } from "./data.ts";
export type { Parameter } from "./types.ts";

/**
 * GKV Beitragsrechner für Deutschland
 */
export class Premium {
  #parameter: Parameter;

  /**
   * Erstelle GKV Beitragsrechner für Jahr
   *
   * @param parameter Parameter für Jahr
   */
  constructor(parameter: Parameter) {
    this.#parameter = parameter;
  }

  /**
   * Liste Jahr
   *
   * @returns Jahr
   */
  get year(): number {
    return this.#parameter.year;
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
