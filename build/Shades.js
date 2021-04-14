"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateShades = void 0;
const chroma_js_1 = __importDefault(require("chroma-js"));
const LighterShade = (color, factor, outputMode = "rgba") => {
    switch (outputMode) {
        case "rgb":
            return `rgb(${chroma_js_1.default(color).brighten(factor).rgb(true).join(",")})`;
        case "rgba":
            return `rgba(${chroma_js_1.default(color).brighten(factor).rgba(true).join(",")})`;
        case "hex":
            return `${chroma_js_1.default(color).brighten(factor).hex()}`;
        case "hsl":
            return `${chroma_js_1.default(color).brighten(factor).hsl()}`;
    }
};
const DarkerShade = (color, factor, outputMode = "rgba") => {
    switch (outputMode) {
        case "rgb":
            return `rgb(${chroma_js_1.default(color).darken(factor).rgb(true).join(",")})`;
        case "rgba":
            return `rgba(${chroma_js_1.default(color).darken(factor).rgba(true).join(",")})`;
        case "hex":
            return `${chroma_js_1.default(color).darken(factor).hex()}`;
        case "hsl":
            return `${chroma_js_1.default(color).darken(factor).hsl()}`;
    }
};
const GenerateShades = ({ shades, outputMode = "rgba", factor = 0.2, darkerShadesToGenerate = 3, lighterShadesToGenerate = 3, }) => {
    const darkerShades = new Array(darkerShadesToGenerate).fill(null);
    const lighterShades = new Array(lighterShadesToGenerate).fill(null);
    //@ts-ignore
    let out = {};
    Object.entries(shades).forEach(([key, color]) => {
        const D = {};
        const L = {};
        darkerShades.map((_, index, arr) => {
            D[`${key}_DARKER_${arr.length - index}`] = DarkerShade(color, factor * (arr.length - index), outputMode);
        });
        lighterShades.forEach((_, index) => {
            L[`${key}_LIGHTER_${index + 1}`] = LighterShade(color, factor * (index + 1), outputMode);
        });
        out = Object.assign(Object.assign(Object.assign(Object.assign({}, D), { [key]: DarkerShade(color, 0, outputMode) }), L), out);
    });
    return out;
};
exports.GenerateShades = GenerateShades;
