declare module "bun:sqlite" {
  type SQLBinding =
    | string
    | bigint
    | ArrayBufferView
    | number
    | boolean
    | null
    | Record<string, string | bigint | ArrayBufferView | number | boolean | null>;

  export class Database {
    constructor(
      filename: string,
      options?:
        | number
        | {
            readonly?: boolean;
            create?: boolean;
            readwrite?: boolean;
            safeIntegers?: boolean;
            strict?: boolean;
          },
    );

    query<ReturnType = unknown, ParamsType = unknown>(
      sql: string,
    ): Statement<ReturnType, ParamsType>;
    run(sql: string, params?: SQLBinding): { lastInsertRowid: number; changes: number };
    transaction<F extends (...args: any[]) => any>(
      insideTransaction: F,
    ): F & {
      deferred: F;
      immediate: F;
      exclusive: F;
    };
    close(throwOnError?: boolean): void;
  }

  export class Statement<ReturnType, ParamsType> {
    all(...params: ParamsType[]): ReturnType[];
    get(...params: ParamsType[]): ReturnType | null;
    run(...params: ParamsType[]): { lastInsertRowid: number; changes: number };
    finalize(): void;
  }
}
