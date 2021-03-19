import Chroma from "chroma-js";
import { IArgs, IShadesResult, TOutputMode } from "interface";

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
