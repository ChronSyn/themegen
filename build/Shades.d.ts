declare type TOutputMode = "rgba" | "rgb" | "hex";
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
export declare const GenerateShades: ({ shades, outputMode, factor, darkerShadesToGenerate, lighterShadesToGenerate, }: IArgs) => {};
export {};
