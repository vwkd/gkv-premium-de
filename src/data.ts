import type { Parameter } from "./types.ts";

/**
 * Parameter für GKV Beitragsrechner
 *
 * - bis 2001 in Deutsche Mark (DM)
 * - ab 2002 in Euro (€)
 * - Quellen:
 *   - [PKV-Vorteile.de - Beitragsbemessungsgrenze 1970 – 2025](https://www.pkv-vorteile.de/entwicklung-der-beitragsbemessungsgrenze/)
 *   - [Lohn-Info - Entwicklung des Beitragssatzes zur Pflegeversicherung](https://www.lohn-info.de/pflegeversicherung_entwicklung_beitragssatz.html)
 *   - [Lohn-Info - Freiwillige Krankenversicherung in der gesetzlichen Krankenkasse](https://www.lohn-info.de/krankenversicherung_freiwillig.html)
 *   - [GKV-Wiki - Entwicklung der Beitragsbemessungsgrenze (BBG)](https://www.krankenkassen.wiki/cms/gkv/info/grundlagen/gkv/bbg/entwicklung-der-beitragsbemessungsgrenze)
 */
// todo: fill in remaining `bemessungsgrundlageMin`
export const parameters: Parameter[] = [
  // todo: earlier years
  {
    jahr: 1970,
    bemessungsgrundlageMin: undefined ?? 0,
    bemessungsgrundlageMax: 14_400,
    beitragssatz: 0.082,
  },
  // todo: 1971-1979
  {
    jahr: 1980,
    bemessungsgrundlageMin: undefined ?? 0,
    bemessungsgrundlageMax: 37_800,
    beitragssatz: 0.114,
  },
  // todo: 1981-1989
  {
    jahr: 1990,
    bemessungsgrundlageMin: undefined ?? 0,
    bemessungsgrundlageMax: 56_700,
    beitragssatz: 0.125,
  },
  {
    jahr: 1991,
    bemessungsgrundlageMin: undefined ?? 0,
    bemessungsgrundlageMax: 58_500,
    beitragssatz: 0.122,
  },
  {
    jahr: 1992,
    bemessungsgrundlageMin: undefined ?? 0,
    bemessungsgrundlageMax: 61_200,
    beitragssatz: 0.127,
  },
  {
    jahr: 1993,
    bemessungsgrundlageMin: undefined ?? 0,
    bemessungsgrundlageMax: 64_800,
    beitragssatz: 0.134,
  },
  {
    jahr: 1994,
    bemessungsgrundlageMin: undefined ?? 0,
    bemessungsgrundlageMax: 68_400,
    beitragssatz: 0.132,
  },
  {
    jahr: 1995,
    bemessungsgrundlageMin: undefined ?? 0,
    bemessungsgrundlageMax: 70_200,
    beitragssatz: 0.132,
    pflegeversicherungssatz: 0.01,
  },
  {
    jahr: 1996,
    bemessungsgrundlageMin: undefined ?? 0,
    bemessungsgrundlageMax: 72_000,
    beitragssatz: 0.135,
    // erste Hälfte des Jahres war 1%, zweite Hälfte 1,7%
    pflegeversicherungssatz: (0.01 + 0.017) / 2,
  },
  {
    jahr: 1997,
    bemessungsgrundlageMin: undefined ?? 0,
    bemessungsgrundlageMax: 73_800,
    beitragssatz: 0.135,
    pflegeversicherungssatz: 0.017,
  },
  {
    jahr: 1998,
    bemessungsgrundlageMin: undefined ?? 0,
    bemessungsgrundlageMax: 75_600,
    beitragssatz: 0.136,
    pflegeversicherungssatz: 0.017,
  },
  {
    jahr: 1999,
    bemessungsgrundlageMin: undefined ?? 0,
    bemessungsgrundlageMax: 76_500,
    beitragssatz: 0.135,
    pflegeversicherungssatz: 0.017,
  },
  {
    jahr: 2000,
    bemessungsgrundlageMin: undefined ?? 0,
    bemessungsgrundlageMax: 77_400,
    beitragssatz: 0.136,
    pflegeversicherungssatz: 0.017,
  },
  {
    jahr: 2001,
    bemessungsgrundlageMin: undefined ?? 0,
    bemessungsgrundlageMax: 78_300,
    beitragssatz: 0.136,
    pflegeversicherungssatz: 0.017,
  },
  {
    jahr: 2002,
    bemessungsgrundlageMin: undefined ?? 0,
    bemessungsgrundlageMax: 40_500,
    beitragssatz: 0.14,
    pflegeversicherungssatz: 0.017,
  },
  {
    jahr: 2003,
    bemessungsgrundlageMin: undefined ?? 0,
    bemessungsgrundlageMax: 41_400,
    beitragssatz: 0.144,
    pflegeversicherungssatz: 0.017,
  },
  {
    jahr: 2004,
    bemessungsgrundlageMin: undefined ?? 0,
    bemessungsgrundlageMax: 41_850,
    beitragssatz: 0.143,
    pflegeversicherungssatz: 0.017,
  },
  {
    jahr: 2005,
    bemessungsgrundlageMin: undefined ?? 0,
    bemessungsgrundlageMax: 42_300,
    // erste Hälfte des Jahres war 14,3%, zweite Hälfte 13,8%
    beitragssatz: (0.143 + (0.138 + 0.009)) / 2,
    // rechne in beitragssatz dazu da nur ab zweiter Hälfte des Jahres
    // sonderbeitragssatz: 0.009,
    pflegeversicherungssatz: 0.017,
  },
  {
    jahr: 2006,
    bemessungsgrundlageMin: undefined ?? 0,
    bemessungsgrundlageMax: 42_750,
    beitragssatz: 0.134,
    sonderbeitragssatz: 0.009,
    pflegeversicherungssatz: 0.017,
  },
  {
    jahr: 2007,
    bemessungsgrundlageMin: 29_400 / 90 * 30,
    bemessungsgrundlageMax: 42_750,
    beitragssatz: 0.14,
    sonderbeitragssatz: 0.009,
    pflegeversicherungssatz: 0.017,
  },
  {
    jahr: 2008,
    bemessungsgrundlageMin: 29_820 / 90 * 30,
    bemessungsgrundlageMax: 43_200,
    beitragssatz: 0.14,
    sonderbeitragssatz: 0.009,
    // erste Hälfte des Jahres war 1,7%, zweite Hälfte 1,95%
    pflegeversicherungssatz: (0.017 + 0.0195) / 2,
  },
  {
    jahr: 2009,
    bemessungsgrundlageMin: 30_240 / 90 * 30,
    bemessungsgrundlageMax: 44_100,
    // erste Hälfte des Jahres war 14,6%, zweite Hälfte 14%
    beitragssatz: (0.146 + 0.14) / 2,
    sonderbeitragssatz: 0.009,
    pflegeversicherungssatz: 0.0195,
  },
  {
    jahr: 2010,
    bemessungsgrundlageMin: 30_660 / 90 * 30,
    bemessungsgrundlageMax: 45_000,
    beitragssatz: 0.14,
    sonderbeitragssatz: 0.009,
    pflegeversicherungssatz: 0.0195,
  },
  {
    jahr: 2011,
    bemessungsgrundlageMin: 30_660 / 90 * 30,
    bemessungsgrundlageMax: 44_550,
    beitragssatz: 0.146,
    sonderbeitragssatz: 0.009,
    pflegeversicherungssatz: 0.0195,
  },
  {
    jahr: 2012,
    bemessungsgrundlageMin: 31_500 / 90 * 30,
    bemessungsgrundlageMax: 45_900,
    beitragssatz: 0.146,
    sonderbeitragssatz: 0.009,
    pflegeversicherungssatz: 0.0195,
  },
  {
    jahr: 2013,
    bemessungsgrundlageMin: 32_340 / 90 * 30,
    bemessungsgrundlageMax: 47_250,
    beitragssatz: 0.146,
    sonderbeitragssatz: 0.009,
    pflegeversicherungssatz: 0.0205,
  },
  {
    jahr: 2014,
    bemessungsgrundlageMin: 33_180 / 90 * 30,
    bemessungsgrundlageMax: 48_600,
    beitragssatz: 0.146,
    sonderbeitragssatz: 0.009,
    pflegeversicherungssatz: 0.0205,
  },
  {
    jahr: 2015,
    bemessungsgrundlageMin: 34_020 / 90 * 30,
    bemessungsgrundlageMax: 49_500,
    beitragssatz: 0.146,
    zusatzbeitragssatz: 0.009,
    pflegeversicherungssatz: 0.0235,
  },
  {
    jahr: 2016,
    bemessungsgrundlageMin: 34_860 / 90 * 30,
    bemessungsgrundlageMax: 50_850,
    beitragssatz: 0.146,
    zusatzbeitragssatz: 0.011,
    pflegeversicherungssatz: 0.0235,
  },
  {
    jahr: 2017,
    bemessungsgrundlageMin: 35_700 / 90 * 30,
    bemessungsgrundlageMax: 52_200,
    beitragssatz: 0.146,
    zusatzbeitragssatz: 0.011,
    pflegeversicherungssatz: 0.0255,
  },
  {
    jahr: 2018,
    bemessungsgrundlageMin: 36_540 / 90 * 30,
    bemessungsgrundlageMax: 53_100,
    beitragssatz: 0.146,
    zusatzbeitragssatz: 0.01,
    pflegeversicherungssatz: 0.0255,
  },
  {
    jahr: 2019,
    bemessungsgrundlageMin: 37_380 / 90 * 30,
    bemessungsgrundlageMax: 54_450,
    beitragssatz: 0.146,
    zusatzbeitragssatz: 0.009,
    pflegeversicherungssatz: 0.0305,
  },
  {
    jahr: 2020,
    bemessungsgrundlageMin: 38_220 / 90 * 30,
    bemessungsgrundlageMax: 56_250,
    beitragssatz: 0.146,
    zusatzbeitragssatz: 0.011,
    pflegeversicherungssatz: 0.0305,
  },
  {
    jahr: 2021,
    bemessungsgrundlageMin: 39_480 / 90 * 30,
    bemessungsgrundlageMax: 58_050,
    beitragssatz: 0.146,
    zusatzbeitragssatz: 0.013,
    pflegeversicherungssatz: 0.0305,
  },
  {
    jahr: 2022,
    bemessungsgrundlageMin: 39_480 / 90 * 30,
    bemessungsgrundlageMax: 58_050,
    beitragssatz: 0.146,
    zusatzbeitragssatz: 0.013,
    pflegeversicherungssatz: 0.0305,
  },
  {
    jahr: 2023,
    bemessungsgrundlageMin: 40_740 / 90 * 30,
    bemessungsgrundlageMax: 59_850,
    beitragssatz: 0.146,
    zusatzbeitragssatz: 0.016,
    pflegeversicherungssatz: 0.0305,
  },
  {
    jahr: 2024,
    bemessungsgrundlageMin: 42_420 / 90 * 30,
    bemessungsgrundlageMax: 62_100,
    beitragssatz: 0.146,
    zusatzbeitragssatz: 0.017,
    pflegeversicherungssatz: 0.034,
  },
  {
    jahr: 2025,
    bemessungsgrundlageMin: 44_940 / 90 * 30,
    bemessungsgrundlageMax: 66_150,
    beitragssatz: 0.146,
    zusatzbeitragssatz: 0.025,
    pflegeversicherungssatz: 0.036,
  },
];
