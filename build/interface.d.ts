export declare type TOutputMode = "rgba" | "rgb" | "hex";
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
export declare type TShadeVariants = "DARKER" | "LIGHTER";
export declare type TRequiredShades = "PRIMARY" | "SECONDARY";
export declare type TOptionalShades = "PRIMARY" | "SECONDARY" | "TERTIARY" | "ERROR" | "DARK" | "LIGHT";
export declare type TShadeDynamicKey = `${TRequiredShades | TOptionalShades}_${TShadeVariants}_${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10}`;
export declare type IShadesResult = {
    [key in TOptionalShades]?: string;
} & {
    [key in TRequiredShades]: string;
} & {
    [key in TShadeDynamicKey]?: string;
};
