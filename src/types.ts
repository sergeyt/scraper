export interface IElement {
  getAttribute(name: string): Promise<string>;
  textContent(): Promise<string>;
  $$(selector: string): Promise<IElement[]>;
}

export interface IEngine {
  // Finds all elements matching specified selector
  $$(selector: string): Promise<IElement[]>;
}
