export declare function fetchData(
  text: string,
  lang?: string
): Promise<
  (
    | {
        source: {
          name: string;
          url: string;
        };
        data: any;
        error?: undefined;
      }
    | {
        source: {
          name: string;
          url: string;
        };
        error: any;
        data?: undefined;
      }
  )[]
>;
