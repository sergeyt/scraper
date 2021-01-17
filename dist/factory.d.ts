import { EngineType, IEngine } from "./types";
export declare function makeEngine(type: EngineType, url: string): Promise<IEngine>;
