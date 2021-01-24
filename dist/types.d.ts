declare type Extractor = (e: IElement) => Promise<string>;
export declare type ExecutionPlan = {
    selector: string;
    term?: string;
    exclude?: string[];
    audio?: string[] | Extractor;
    visual?: string[] | Extractor;
    parse?: (elem: IElement) => Promise<any[]>;
    lstrip?: string;
    map?: (s: string) => string;
    obj?: {
        key: string;
        plan: {
            [s: string]: ExecutionPlan;
        };
    };
};
export declare type EngineType = "playwright" | "cheerio";
export declare type Query = {
    text: string;
    lang?: string;
};
export declare type SourceType = "universal" | "audio" | "visual" | "text";
export declare type SourceMeta = {
    type: SourceType;
    name: string;
    url: string;
};
export declare type Page = {
    url: string;
    plan: ExecutionPlan[];
};
export declare type Source = SourceMeta & {
    makeUrl?(query: Query): string;
    engine?: EngineType;
    plan?: ExecutionPlan[];
    getData?(url: string, query?: Query): Promise<any>;
    makePages?(query: Query): Page[];
};
export interface IElement {
    getAttribute(name: string): Promise<string>;
    textContent(): Promise<string>;
    querySelectorAll(selector: string): Promise<IElement[]>;
}
export interface IEngine extends IElement {
    close(): Promise<void>;
}
export {};
