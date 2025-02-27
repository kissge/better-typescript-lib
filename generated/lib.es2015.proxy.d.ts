/// <reference no-default-lib="true"/>

interface ProxyHandler<T extends object> {
  getPrototypeOf?(target: T): object | null;
  setPrototypeOf?(target: T, v: unknown): boolean;
  isExtensible?(target: T): boolean;
  preventExtensions?(target: T): boolean;
  getOwnPropertyDescriptor?(
    target: T,
    p: PropertyKey
  ): PropertyDescriptor | undefined;
  has?(target: T, p: PropertyKey): boolean;
  get?(target: T, p: PropertyKey, receiver: unknown): any;
  set?(target: T, p: PropertyKey, value: unknown, receiver: unknown): boolean;
  deleteProperty?(target: T, p: PropertyKey): boolean;
  defineProperty?(
    target: T,
    p: PropertyKey,
    attributes: PropertyDescriptor
  ): boolean;
  enumerate?(target: T): PropertyKey[];
  ownKeys?(target: T): PropertyKey[];
  apply?(target: T, thisArg: unknown, argArray: unknown[]): any;
  construct?(target: T, argArray: unknown[], newTarget: unknown): object;
}
// --------------------

// interface ProxyHandler<T extends object> {
//     apply?(target: T, thisArg: any, argArray: any[]): any;
//     construct?(target: T, argArray: any[], newTarget: Function): object;
//     defineProperty?(target: T, p: string | symbol, attributes: PropertyDescriptor): boolean;
//     deleteProperty?(target: T, p: string | symbol): boolean;
//     get?(target: T, p: string | symbol, receiver: any): any;
//     getOwnPropertyDescriptor?(target: T, p: string | symbol): PropertyDescriptor | undefined;
//     getPrototypeOf?(target: T): object | null;
//     has?(target: T, p: string | symbol): boolean;
//     isExtensible?(target: T): boolean;
//     ownKeys?(target: T): ArrayLike<string | symbol>;
//     preventExtensions?(target: T): boolean;
//     set?(target: T, p: string | symbol, value: any, receiver: any): boolean;
//     setPrototypeOf?(target: T, v: object | null): boolean;
// }


interface ProxyConstructor {
    revocable<T extends object>(target: T, handler: ProxyHandler<T>): { proxy: T; revoke: () => void; };
    new <T extends object>(target: T, handler: ProxyHandler<T>): T;
}
declare var Proxy: ProxyConstructor;
