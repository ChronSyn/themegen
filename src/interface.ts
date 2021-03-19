export type TOutputMode = "rgba" | "rgb" | "hex";

export interface IShades {
  /** The primary color */
  PRIMARY: string;

  /** The secondary color */
  SECONDARY: string;

  /** The (optional) tertiary color */
  TERTIARY?: string;

  /** The (optional) error color */
  ERROR?: string;

  /** The (optional) dark color */
  DARK?: string;

  /** The (optional) light color */
  LIGHT?: string;
}

export interface IArgs {
  shades: IShades;

  /** The (optional) output mode for the colours (default: rgba) */
  outputMode?: TOutputMode;

  /** The (optional) factor by which to adjust shades. Higher number = more extreme difference between shades (default: 0.2) */
  factor?: number;

  /** The (optional) number of lighter shades to generate (default: 3) */
  lighterShadesToGenerate?: number;

  /** The (optional) number of darker shades to generate (default: 3) */
  darkerShadesToGenerate?: number;
}

export type TShadeVariants = "DARKER" | "LIGHTER";
export type TRequiredShades = "PRIMARY" | "SECONDARY";
export type TOptionalShades =
  | "PRIMARY"
  | "SECONDARY"
  | "TERTIARY"
  | "ERROR"
  | "DARK"
  | "LIGHT";

export type TNumber =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20;

export type TShadeDynamicKey = `${
  | TRequiredShades
  | TOptionalShades}_${TShadeVariants}_${TNumber}`;

export type TShadesResult = {
  [key in TRequiredShades]: string;
} &
  {
    [key in TOptionalShades]?: string;
  } &
  {
    [key in TShadeDynamicKey]?: string;
  };
