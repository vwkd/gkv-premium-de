/**
 * Parameter um Beitrag zu berechnen
 */
export interface Parameter {
  /**
   * Jahr für das die Parameter gelten
   */
  year: number;
  /**
   * Minimale Bemessungsgrundlage
   *
   * - nennt auch Mindestbemessungsgrundlage, Mindestbemessungsgrenze, Mindestbeitragsbemessungsgrundlage, etc.
   */
  baseMin: number;
  /**
   * Maximale Bemessungsgrundlage
   *
   * - nennt auch Beitragsbemessungsgrenze
   */
  baseMax: number;
  /**
   * Beitragssatz
   *
   * - mit Krankentagegeld
   */
  // todo: entferne Krankentagegeld da nicht für Freiwillig Versicherte?
  rate: number;
  /**
   * Sonderbeitragssatz
   *
   * - von zweiter Hälfte des Jahres 2005 bis 2014
   */
  rateExtra?: number;
  /**
   * Zusatzbeitragssatz
   *
   * - seit 2015
   * - durchschnittlich
   */
  rateAdditional?: number;
  /**
   * Pflegeversicherungssatz
   *
   * - seit 1995
   * - ohne Zuschlag für Kinderlose
   * - ohne Abschlag für mehrere Kinder
   */
  rateCare?: number;
}
