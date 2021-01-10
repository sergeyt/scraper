import { Source, Query, SourceType, SourceMeta } from "./types";
export declare const sources: Source[];
declare type ParseResult = {
    source: SourceMeta;
    data?: {
        audio: any[];
        visual: any[];
        definition: any[];
        [other: string]: any[];
    };
    error?: any;
};
export declare function makeParser(source: Source): ({ text, lang }: Query) => Promise<ParseResult[]>;
declare type Options = {
    type?: SourceType;
    sources?: Source[];
    include?: string[];
    exclude?: string[];
};
export declare function fetchData(query: Query, options?: Options): Promise<ParseResult[][]>;
export {};
