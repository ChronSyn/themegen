import Chroma from "chroma-js";
import { IArgs, TShadesResult, TOutputMode } from "interface";

const LighterShade = (
  color: string,
  factor: number,
  outputMode: TOutputMode = "rgba"
) => {
  switch (outputMode) {
    case "rgb":
      return `rgb(${Chroma(color).brighten(factor).rgb(true).join(",")})`;
    case "rgba":
      return `rgba(${Chroma(color).brighten(factor).rgba(true).join(",")})`;
    case "hex":
      return `${Chroma(color).brighten(factor).hex()}`;
    case "hsl":
      return `${Chroma(color).brighten(factor).hsl()}`;
    case "channels":
      return [
        Chroma(color).brighten(factor).get("rgb.r"),
        Chroma(color).brighten(factor).get("rgb.g"),
        Chroma(color).brighten(factor).get("rgb.b"),
      ];
  }
};

const DarkerShade = (
  color: string,
  factor: number,
  outputMode: TOutputMode = "rgba"
) => {
  switch (outputMode) {
    case "rgb":
      return `rgb(${Chroma(color).darken(factor).rgb(true).join(",")})`;
    case "rgba":
      return `rgba(${Chroma(color).darken(factor).rgba(true).join(",")})`;
    case "hex":
      return `${Chroma(color).darken(factor).hex()}`;
    case "hsl":
      return `${Chroma(color).darken(factor).hsl()}`;
    case "channels":
      return [
        Chroma(color).darken(factor).get("rgb.r"),
        Chroma(color).darken(factor).get("rgb.g"),
        Chroma(color).darken(factor).get("rgb.b"),
      ];
  }
};

export const GenerateShades = ({
  shades,
  outputMode = "rgba",
  factor = 0.2,
  darkerShadesToGenerate = 3,
  lighterShadesToGenerate = 3,
}: IArgs): TShadesResult => {
  const darkerShades = new Array(darkerShadesToGenerate).fill(null);
  const lighterShades = new Array(lighterShadesToGenerate).fill(null);

  //@ts-ignore
  let out: TShadesResult = {};
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
