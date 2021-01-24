import { Source, Query, SourceType, SourceMeta } from "./types";
export declare const sources: Source[];
declare type Data = {
    audio: any[];
    visual: any[];
    definition: any[];
    [other: string]: any[];
};
declare type ParseResult = {
    source: SourceMeta;
    data?: Data;
    error?: any;
};
export declare function makeParser(source: Source): ({ text, lang }: Query) => Promise<ParseResult[]>;
declare type Options = {
    type?: SourceType;
    sources?: Source[];
    include?: string[];
    exclude?: string[];
};
export declare function fetchData(query: Query, options?: Options): Promise<any>;
export {};
