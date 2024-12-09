/**
 * Parameter um Beitrag zu berechnen
 */
export interface Parameter {
  /**
   * Jahr für das die Parameter gelten
   */
  jahr: number;
  /**
   * Minimale Bemessungsgrundlage
   *
   * - nennt auch Mindestbemessungsgrundlage, Mindestbemessungsgrenze, Mindestbeitragsbemessungsgrundlage, etc.
   */
  bemessungsgrundlageMin: number;
  /**
   * Maximale Bemessungsgrundlage
   *
   * - nennt auch Beitragsbemessungsgrenze
   */
  bemessungsgrundlageMax: number;
  /**
   * Beitragssatz
   *
   * - mit Krankentagegeld
   */
  // todo: entferne Krankentagegeld da nicht für Freiwillig Versicherte?
  beitragssatz: number;
  /**
   * Sonderbeitragssatz
   *
   * - von zweiter Hälfte des Jahres 2005 bis 2014
   */
  sonderbeitragssatz?: number;
  /**
   * Zusatzbeitragssatz
   *
   * - seit 2015
   * - durchschnittlich
   */
  zusatzbeitragssatz?: number;
  /**
   * Pflegeversicherungssatz
   *
   * - seit 1995
   * - ohne Zuschlag für Kinderlose
   * - ohne Abschlag für mehrere Kinder
   */
  pflegeversicherungssatz?: number;
}
