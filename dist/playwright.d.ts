import { Browser, Page } from "playwright";
import { IEngine, IElement } from "./types";
declare class EngineStub implements IEngine {
    $$(selector: string): Promise<IElement[]>;
    close(): Promise<void>;
}
declare class EngineImpl implements IEngine {
    browser: Browser;
    page: Page;
    constructor(browser: Browser, page: Page);
    $$(selector: string): Promise<IElement[]>;
    close(): Promise<void>;
}
export declare function makePlaywrightEngine(url: string): Promise<EngineStub | EngineImpl>;
export {};
