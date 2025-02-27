/// <reference no-default-lib="true"/>

interface PromiseConstructor {
  /**
   * A reference to the prototype.
   */
  readonly prototype: Promise<unknown>;

  /**
   * Creates a new Promise.
   * @param executor A callback used to initialize the promise. This callback is passed two arguments:
   * a resolve callback used to resolve the promise with a value or the result of another promise,
   * and a reject callback used to reject the promise with a provided reason or error.
   */
  new <T>(
    executor: (
      resolve: undefined extends T
        ? {
            (value?: T | PromiseLike<T>): void;
          }
        : {
            (value: T | PromiseLike<T>): void;
          },
      // TODO: Revisit after https://github.com/microsoft/TypeScript/issues/42156 solves
      //  {
      //   (value: T | PromiseLike<T>): void;
      // } & (undefined extends T
      //   ? {
      //       (value?: T | PromiseLike<T>): void;
      //     }
      //   : {}),
      reject: (reason?: any) => void
    ) => void
  ): Promise<T>;

  /**
   * Creates a Promise that is resolved with an array of results when all of the provided Promises
   * resolve, or rejected when any Promise is rejected.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  all<T extends readonly any[]>(
    values: [...T]
  ): Promise<{
    -readonly [K in keyof T]: Awaited<T[K]>;
  }>;

  // see: lib.es2015.iterable.d.ts
  // all<T>(values: Iterable<T | PromiseLike<T>>): Promise<T[]>;

  /**
   * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
   * or rejected.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  race<T>(values: readonly T[]): Promise<Awaited<T>>;

  // see: lib.es2015.iterable.d.ts
  // race<T>(values: Iterable<T>): Promise<T extends PromiseLike<infer U> ? U : T>;

  /**
   * Creates a new rejected promise for the provided reason.
   * @param reason The reason the promise was rejected.
   * @returns A new rejected Promise.
   */
  reject<T = never>(reason?: any): Promise<T>;

  /**
   * Creates a new resolved promise for the provided value.
   * @param value A promise.
   * @returns A promise whose internal state matches the provided promise.
   */
  resolve<T>(value: T | PromiseLike<T>): Promise<Awaited<T>>;

  /**
   * Creates a new resolved promise .
   * @returns A resolved promise.
   */
  resolve(): Promise<void>;
}
// --------------------

// interface PromiseConstructor {
//     /**
//      * A reference to the prototype.
//      */
//     readonly prototype: Promise<any>;
// 
//     /**
//      * Creates a new Promise.
//      * @param executor A callback used to initialize the promise. This callback is passed two arguments:
//      * a resolve callback used to resolve the promise with a value or the result of another promise,
//      * and a reject callback used to reject the promise with a provided reason or error.
//      */
//     new <T>(executor: (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void): Promise<T>;
// 
//     /**
//      * Creates a Promise that is resolved with an array of results when all of the provided Promises
//      * resolve, or rejected when any Promise is rejected.
//      * @param values An array of Promises.
//      * @returns A new Promise.
//      */
//     all<T extends readonly unknown[] | []>(values: T): Promise<{ -readonly [P in keyof T]: Awaited<T[P]> }>;
// 
//     // see: lib.es2015.iterable.d.ts
//     // all<T>(values: Iterable<T | PromiseLike<T>>): Promise<T[]>;
// 
//     /**
//      * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
//      * or rejected.
//      * @param values An array of Promises.
//      * @returns A new Promise.
//      */
//     race<T extends readonly unknown[] | []>(values: T): Promise<Awaited<T[number]>>;
// 
//     // see: lib.es2015.iterable.d.ts
//     // race<T>(values: Iterable<T>): Promise<T extends PromiseLike<infer U> ? U : T>;
// 
//     /**
//      * Creates a new rejected promise for the provided reason.
//      * @param reason The reason the promise was rejected.
//      * @returns A new rejected Promise.
//      */
//     reject<T = never>(reason?: any): Promise<T>;
// 
//     /**
//      * Creates a new resolved promise.
//      * @returns A resolved promise.
//      */
//     resolve(): Promise<void>;
// 
//     /**
//      * Creates a new resolved promise for the provided value.
//      * @param value A promise.
//      * @returns A promise whose internal state matches the provided promise.
//      */
//     resolve<T>(value: T | PromiseLike<T>): Promise<T>;
// }


declare var Promise: PromiseConstructor;
