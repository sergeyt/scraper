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
};
export declare type EngineType = "playwright" | "cheerio";
export declare type Query = {
    text: string;
    lang?: string;
};
export declare type SourceType = "universal" | "audio" | "visual" | "text";
export declare type Source = {
    type: SourceType;
    name: string;
    url: string;
    makeUrl?(query: Query): string;
    engine?: EngineType;
    plan?: ExecutionPlan[];
    getData?(query: Query): Promise<any>;
};
export interface IElement {
    getAttribute(name: string): Promise<string>;
    textContent(): Promise<string>;
    $$(selector: string): Promise<IElement[]>;
}
export interface IEngine {
    $$(selector: string): Promise<IElement[]>;
    close(): Promise<void>;
}
export {};
