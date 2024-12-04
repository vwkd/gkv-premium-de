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
  jahr(): number {
    return this.#parameter.jahr;
  }

  /**
   * Liste Bemessungsgrenzen
   *
   * @returns Liste der Bemessungsgrenzen
   */
  bemessungsgrenzen(): [number, number] {
    return [
      this.#parameter.bemessungsgrundlageMin,
      this.#parameter.bemessungsgrundlageMax,
    ];
  }

  /**
   * Liste Beitragssätze
   *
   * @returns Liste der Beitragssätze
   */
  beitragssätze(): number[] {
    return [
      this.#parameter.beitragssatz,
      this.#parameter.sonderbeitragssatz,
      this.#parameter.zusatzbeitragssatz,
      this.#parameter.pflegeversicherungssatz,
    ].filter((satz) => satz !== undefined);
  }

  /**
   * Berechne Bemessungsgrundlage
   *
   * @params {number} zvE zu versteuerndes Einkommen, natürliche Zahl
   * @returns Bemessungsgrundlage
   */
  bemessungsgrundlage(zvE: number): number {
    const min = this.#parameter.bemessungsgrundlageMin;
    const max = this.#parameter.bemessungsgrundlageMax;

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
  beitrag(zvE: number): number {
    return this.beitragssatz() * this.bemessungsgrundlage(zvE);
  }

  /**
   * Berechne Beitragssatz
   *
   * @returns Beitragssatz
   */
  beitragssatz(): number {
    return this.beitragssätze()
      .reduce((acc, satz) => (acc + satz), 0);
  }
}
