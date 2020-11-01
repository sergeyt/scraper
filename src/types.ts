type Extractor = (e: IElement) => Promise<string>;

export type ExecutionPlan = {
  selector: string;
  term?: string;
  exclude?: string[];
  audio?: string[] | Extractor;
  visual?: string[] | Extractor;
  parse?: (elem: IElement) => Promise<any[]>;
  lstrip?: string;
  map?: (s: string) => string;
};

export type EngineType = "playwright" | "cheerio";

export type Query = { text: string; lang?: string };

export type SourceType = "universal" | "audio" | "visual" | "text";

export type SourceMeta = {
  type: SourceType;
  name: string;
  url: string;
};

export type Source = SourceMeta & {
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
  // Finds all elements matching specified selector
  $$(selector: string): Promise<IElement[]>;
  close(): Promise<void>;
}
