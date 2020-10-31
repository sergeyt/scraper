export type ExecutionPlan = {
  selector: string;
  term?: string;
  exclude?: string[];
  audio?: string[];
  visual?: string[];
  parse?: (elem: IElement) => Promise<any[]>;
};

export type EngineType = "playwright" | "cheerio";

export type Source = {
  name: string;
  url: string;
  makeUrl(query: {text: string; lang: string}): string;
  engine?: EngineType;
  plan: ExecutionPlan[];
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
