import { Source, Query, SourceType } from "./types";
export declare const sources: Source[];
declare type Options = {
    type?: SourceType;
    sources?: Source[];
    include?: string[];
    exclude?: string[];
};
export declare function fetchData(query: Query, options?: Options): Promise<({
    source: {
        name: string;
        url: string;
    };
    data: any;
    error?: undefined;
} | {
    source: {
        name: string;
        url: string;
    };
    error: any;
    data?: undefined;
})[]>;
export {};
