export interface NameCommon { common?: string; official?: string; }
export interface FlagInfo { png?: string; svg?: string; alt?: string; }
export interface Currency { name?: string; symbol?: string; }

export interface Country {
  name?: NameCommon;
  flags?: FlagInfo;
  cca3?: string;
  capital?: string[];
  region?: string;
  subregion?: string;
  population?: number;
  languages?: Record<string, string>;
  currencies?: Record<string, Currency>;
}
