import Chroma from "chroma-js";

type TOutputMode = "rgba" | "rgb" | "hex";

interface IShades {
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

interface IArgs {
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

type TShadeVariants = "DARKER" | "LIGHTER";
type TShades =
  | "PRIMARY"
  | "SECONDARY"
  | "TERTIARY"
  | "ERROR"
  | "DARK"
  | "LIGHT";
type TShadeDynamicKey = `${TShades}_${TShadeVariants}_${number}`;

type IShadesResult = {
  [key in TShadeDynamicKey]?: string;
} & {
  PRIMARY: string;

  SECONDARY: string;
  TERTIARY?: string;
  ERROR?: string;
  DARK?: string;
  LIGHT?: string;
};

const LighterShade = (
  color: string,
  factor: number,
  outputMode?: TOutputMode
) => {
  switch (outputMode) {
    case "rgb":
      return `rgb(${Chroma(color).brighten(factor).rgb(true).join(",")})`;
    case "rgba":
      return `rgba(${Chroma(color).brighten(factor).rgba(true).join(",")})`;
    case "hex":
      return `${Chroma(color).brighten(factor).hex()}`;
  }
};

const DarkerShade = (
  color: string,
  factor: number,
  outputMode?: TOutputMode
) => {
  switch (outputMode) {
    case "rgb":
      return `rgb(${Chroma(color).darken(factor).rgb(true).join(",")})`;
    case "rgba":
      return `rgba(${Chroma(color).darken(factor).rgba(true).join(",")})`;
    case "hex":
      return `${Chroma(color).darken(factor).hex()}`;
  }
};

export const GenerateShades = ({
  shades,
  outputMode = "rgba",
  factor = 0.2,
  darkerShadesToGenerate = 3,
  lighterShadesToGenerate = 3,
}: IArgs): IShadesResult => {
  const darkerShades = new Array(darkerShadesToGenerate).fill(null);
  const lighterShades = new Array(lighterShadesToGenerate).fill(null);

  let out = {} as IShadesResult;
  Object.entries(shades).forEach(([key, color]) => {
    const D = {};
    const L = {};

    darkerShades.map((_, index, arr) => {
      D[`${key}_DARKER_${arr.length - index}`] = DarkerShade(
        color,
        factor * (arr.length - index),
        outputMode
      );
    });

    lighterShades.forEach((_, index) => {
      L[`${key}_LIGHTER_${index + 1}`] = LighterShade(
        color,
        factor * (index + 1),
        outputMode
      );
    });

    out = { ...D, [key]: DarkerShade(color, 0, outputMode), ...L, ...out };
  });

  return out;
};
