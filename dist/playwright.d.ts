import { Browser, Page } from "playwright";
import { IEngine, IElement } from "./types";
declare class EngineStub implements IEngine {
    querySelectorAll(selector: string): Promise<IElement[]>;
    close(): Promise<void>;
    getAttribute(name: string): Promise<string>;
    textContent(): Promise<string>;
}
declare class EngineImpl implements IEngine {
    browser: Browser;
    page: Page;
    constructor(browser: Browser, page: Page);
    querySelectorAll(selector: string): Promise<IElement[]>;
    close(): Promise<void>;
    getAttribute(name: string): Promise<string>;
    textContent(): Promise<string>;
}
export declare function makePlaywrightEngine(url: string): Promise<EngineStub | EngineImpl>;
export {};
