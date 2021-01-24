import { Browser, Page, ElementHandle } from "playwright";
import { IEngine, IElement } from "./types";
import { IS_BROWSER } from "./utils";

class EngineStub implements IEngine {
  querySelectorAll(selector: string): Promise<IElement[]> {
    return Promise.resolve([]);
  }

  close(): Promise<void> {
    return Promise.resolve(undefined);
  }

  getAttribute(name: string): Promise<string> {
    return Promise.resolve("");
  }

  textContent(): Promise<string> {
    return Promise.resolve("");
  }
}

class ElementImpl implements IElement {
  page: Page;
  elem: ElementHandle;

  constructor(page: Page, elem: ElementHandle) {
    this.page = page;
    this.elem = elem;
  }

  async querySelectorAll(selector: string): Promise<IElement[]> {
    const elems = await this.elem.$$(selector);
    return elems.map((e) => new ElementImpl(this.page, e));
  }

  getAttribute(name: string): Promise<string> {
    return this.elem.getAttribute(name);
  }

  textContent(): Promise<string> {
    return this.elem.textContent();
  }
}

class EngineImpl implements IEngine {
  browser: Browser;
  page: Page;

  constructor(browser: Browser, page: Page) {
    this.browser = browser;
    this.page = page;
  }

  async querySelectorAll(selector: string): Promise<IElement[]> {
    try {
      await this.page.waitForSelector(selector, {
        timeout: 5000,
      });
    } catch (err) {}
    const elems = await this.page.$$(selector);
    return elems.map((e) => new ElementImpl(this.page, e));
  }

  async close(): Promise<void> {
    await this.page.close();
    await this.browser.close();
  }

  getAttribute(name: string): Promise<string> {
    return Promise.resolve("");
  }

  textContent(): Promise<string> {
    return Promise.resolve("");
  }
}

export async function makePlaywrightEngine(url: string) {
  if (IS_BROWSER) {
    return new EngineStub();
  }
  // TODO support other browser
  const { chromium } = require("playwright");
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(url);
  return new EngineImpl(browser, page);
}
