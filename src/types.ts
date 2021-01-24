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
  obj?: {
    key: string;
    plan: {
      [s: string]: ExecutionPlan;
    };
  };
};

export type EngineType = "playwright" | "cheerio";

export type Query = { text: string; lang?: string };

export type SourceType = "universal" | "audio" | "visual" | "text";

export type SourceMeta = {
  type: SourceType;
  name: string;
  url: string;
};

export type Page = {
  url: string;
  plan: ExecutionPlan[];
};

export type Source = SourceMeta & {
  makeUrl?(query: Query): string;
  engine?: EngineType;
  plan?: ExecutionPlan[];
  getData?(url: string, query?: Query): Promise<any>;
  makePages?(query: Query): Page[];
};

export interface IElement {
  getAttribute(name: string): Promise<string>;
  textContent(): Promise<string>;
  // Finds all elements matching specified selector
  querySelectorAll(selector: string): Promise<IElement[]>;
}

export interface IEngine extends IElement {
  close(): Promise<void>;
}
