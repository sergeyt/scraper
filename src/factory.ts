import { EngineType, IEngine } from './types';
import { makePlaywrightEngine } from './playwright';
import { makeCheerioEngine } from './cheerio';

export function makeEngine(type: EngineType, url: string): Promise<IEngine> {
    if (type === "playwright") {
        return makePlaywrightEngine(url);
    }
    return makeCheerioEngine(url);
}
