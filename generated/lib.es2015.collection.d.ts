interface Map<K, V> {
  clear(): void;
  delete(key: K): boolean;
  forEach<This>(
    callbackfn: (this: This, value: V, key: K, map: Map<K, V>) => void,
    thisArg?: This
  ): void;
  get(key: K): V | undefined;
  has(key: K): boolean;
  set(key: K, value: V): this;
  readonly size: number;
}

interface MapConstructor {
  new <K, V>(entries?: readonly (readonly [K, V])[] | null): Map<K, V>;
  readonly prototype: Map<unknown, unknown>;
}

declare var Map: MapConstructor;

interface WeakMap<K extends object, V> {
  delete(key: K): boolean;
  get(key: K): V | undefined;
  has(key: K): boolean;
  set(key: K, value: V): this;
}

interface WeakMapConstructor {
  new <K extends object = object, V = unknown>(
    entries?: readonly [K, V][] | null
  ): WeakMap<K, V>;
  readonly prototype: WeakMap<object, unknown>;
}
declare var WeakMap: WeakMapConstructor;

interface ReadonlyMap<K, V> {
  forEach<This>(
    callbackfn: (this: This, value: V, key: K, map: ReadonlyMap<K, V>) => void,
    thisArg?: This
  ): void;
  get(key: K): V | undefined;
  has(key: K): boolean;
  readonly size: number;
}

interface Set<T> {
  add(value: T): this;
  clear(): void;
  delete(value: T): boolean;
  forEach<This>(
    callbackfn: (this: This, value: T, value2: T, set: Set<T>) => void,
    thisArg?: This
  ): void;
  has(value: T): boolean;
  readonly size: number;
}

interface SetConstructor {
  new <T>(values?: readonly T[] | null): Set<T>;
  readonly prototype: Set<unknown>;
}
declare var Set: SetConstructor;

interface ReadonlySet<T> {
  forEach<This>(
    callbackfn: (this: This, value: T, value2: T, set: ReadonlySet<T>) => void,
    thisArg?: This
  ): void;
  has(value: T): boolean;
  readonly size: number;
}
// --------------------

// interface Map<K, V> {
//     clear(): void;
//     delete(key: K): boolean;
//     forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
//     get(key: K): V | undefined;
//     has(key: K): boolean;
//     set(key: K, value: V): this;
//     readonly size: number;
// }

// 
// 
// interface MapConstructor {
//     new(): Map<any, any>;
//     new<K, V>(entries?: readonly (readonly [K, V])[] | null): Map<K, V>;
//     readonly prototype: Map<any, any>;
// }

// 
// declare var Map: MapConstructor;

// 
// 
// interface ReadonlyMap<K, V> {
//     forEach(callbackfn: (value: V, key: K, map: ReadonlyMap<K, V>) => void, thisArg?: any): void;
//     get(key: K): V | undefined;
//     has(key: K): boolean;
//     readonly size: number;
// }

// 
// 
// interface WeakMap<K extends object, V> {
//     delete(key: K): boolean;
//     get(key: K): V | undefined;
//     has(key: K): boolean;
//     set(key: K, value: V): this;
// }

// 
// 
// interface WeakMapConstructor {
//     new <K extends object = object, V = any>(entries?: readonly [K, V][] | null): WeakMap<K, V>;
//     readonly prototype: WeakMap<object, any>;
// }

// 
// declare var WeakMap: WeakMapConstructor;

// 
// 
// interface Set<T> {
//     add(value: T): this;
//     clear(): void;
//     delete(value: T): boolean;
//     forEach(callbackfn: (value: T, value2: T, set: Set<T>) => void, thisArg?: any): void;
//     has(value: T): boolean;
//     readonly size: number;
// }

// 
// 
// interface SetConstructor {
//     new <T = any>(values?: readonly T[] | null): Set<T>;
//     readonly prototype: Set<any>;
// }

// 
// declare var Set: SetConstructor;

// 
// 
// interface ReadonlySet<T> {
//     forEach(callbackfn: (value: T, value2: T, set: ReadonlySet<T>) => void, thisArg?: any): void;
//     has(value: T): boolean;
//     readonly size: number;
// }


interface WeakSet<T extends object> {
    add(value: T): this;
    delete(value: T): boolean;
    has(value: T): boolean;
}

interface WeakSetConstructor {
    new <T extends object = object>(values?: readonly T[] | null): WeakSet<T>;
    readonly prototype: WeakSet<object>;
}
declare var WeakSet: WeakSetConstructor;
