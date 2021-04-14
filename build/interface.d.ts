export declare type TOutputMode = "rgba" | "rgb" | "hex" | "hsl";
export interface IShades {
    /** The primary color */
    PRIMARY: string;
    /** The secondary color */
    SECONDARY: string;
    /** The (optional) tertiary color */
    TERTIARY?: string;
    /** The (optional) success color */
    SUCCESS?: string;
    /** The (optional) info color */
    INFO?: string;
    /** The (optional) warning color */
    WARNING?: string;
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
export declare type TOptionalShades = "PRIMARY" | "SECONDARY" | "TERTIARY" | "SUCCESS" | "INFO" | "WARNING" | "ERROR" | "DARK" | "LIGHT";
export declare type TNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;
export declare type TShadeDynamicKey = `${TRequiredShades | TOptionalShades}_${TShadeVariants}_${TNumber}`;
export declare type TShadesResult = {
    [key in TRequiredShades]: string;
} & {
    [key in TOptionalShades]?: string;
} & {
    [key in TShadeDynamicKey]?: string;
};
