/// <reference no-default-lib="true"/>

declare namespace Reflect {
  function apply(
    target: Function,
    thisArgument: any,
    argumentsList: ArrayLike<any>
  ): unknown;
  function construct(
    target: Function,
    argumentsList: ArrayLike<any>,
    newTarget?: any
  ): object;
  function defineProperty(
    target: object,
    propertyKey: PropertyKey,
    attributes: PropertyDescriptor
  ): boolean;
  function deleteProperty(target: object, propertyKey: PropertyKey): boolean;
  function get<T, K extends PropertyKey>(
    target: T,
    propertyKey: K,
    receiver?: any
  ): K extends keyof T ? T[K] : unknown;
  function getOwnPropertyDescriptor(
    target: object,
    propertyKey: PropertyKey
  ): PropertyDescriptor | undefined;
  function getPrototypeOf(target: object): object;
  function has(target: object, propertyKey: PropertyKey): boolean;
  function isExtensible(target: object): boolean;
  function ownKeys(target: object): PropertyKey[];
  function preventExtensions(target: object): boolean;
  function set(
    target: object,
    propertyKey: PropertyKey,
    value: any,
    receiver?: any
  ): boolean;
  function setPrototypeOf(target: object, proto: any): boolean;
}
// --------------------

// declare namespace Reflect {
//     /**
//      * Calls the function with the specified object as the this value
//      * and the elements of specified array as the arguments.
//      * @param target The function to call.
//      * @param thisArgument The object to be used as the this object.
//      * @param argumentsList An array of argument values to be passed to the function.
//      */
//     function apply(target: Function, thisArgument: any, argumentsList: ArrayLike<any>): any;
// 
//     /**
//      * Constructs the target with the elements of specified array as the arguments
//      * and the specified constructor as the `new.target` value.
//      * @param target The constructor to invoke.
//      * @param argumentsList An array of argument values to be passed to the constructor.
//      * @param newTarget The constructor to be used as the `new.target` object.
//      */
//     function construct(target: Function, argumentsList: ArrayLike<any>, newTarget?: Function): any;
// 
//     /**
//      * Adds a property to an object, or modifies attributes of an existing property.
//      * @param target Object on which to add or modify the property. This can be a native JavaScript object
//      *        (that is, a user-defined object or a built in object) or a DOM object.
//      * @param propertyKey The property name.
//      * @param attributes Descriptor for the property. It can be for a data property or an accessor property.
//      */
//     function defineProperty(target: object, propertyKey: PropertyKey, attributes: PropertyDescriptor): boolean;
// 
//     /**
//      * Removes a property from an object, equivalent to `delete target[propertyKey]`,
//      * except it won't throw if `target[propertyKey]` is non-configurable.
//      * @param target Object from which to remove the own property.
//      * @param propertyKey The property name.
//      */
//     function deleteProperty(target: object, propertyKey: PropertyKey): boolean;
// 
//     /**
//      * Gets the property of target, equivalent to `target[propertyKey]` when `receiver === target`.
//      * @param target Object that contains the property on itself or in its prototype chain.
//      * @param propertyKey The property name.
//      * @param receiver The reference to use as the `this` value in the getter function,
//      *        if `target[propertyKey]` is an accessor property.
//      */
//     function get(target: object, propertyKey: PropertyKey, receiver?: any): any;
// 
//     /**
//      * Gets the own property descriptor of the specified object.
//      * An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.
//      * @param target Object that contains the property.
//      * @param propertyKey The property name.
//      */
//     function getOwnPropertyDescriptor(target: object, propertyKey: PropertyKey): PropertyDescriptor | undefined;
// 
//     /**
//      * Returns the prototype of an object.
//      * @param target The object that references the prototype.
//      */
//     function getPrototypeOf(target: object): object | null;
// 
//     /**
//      * Equivalent to `propertyKey in target`.
//      * @param target Object that contains the property on itself or in its prototype chain.
//      * @param propertyKey Name of the property.
//      */
//     function has(target: object, propertyKey: PropertyKey): boolean;
// 
//     /**
//      * Returns a value that indicates whether new properties can be added to an object.
//      * @param target Object to test.
//      */
//     function isExtensible(target: object): boolean;
// 
//     /**
//      * Returns the string and symbol keys of the own properties of an object. The own properties of an object
//      * are those that are defined directly on that object, and are not inherited from the object's prototype.
//      * @param target Object that contains the own properties.
//      */
//     function ownKeys(target: object): (string | symbol)[];
// 
//     /**
//      * Prevents the addition of new properties to an object.
//      * @param target Object to make non-extensible.
//      * @return Whether the object has been made non-extensible.
//      */
//     function preventExtensions(target: object): boolean;
// 
//     /**
//      * Sets the property of target, equivalent to `target[propertyKey] = value` when `receiver === target`.
//      * @param target Object that contains the property on itself or in its prototype chain.
//      * @param propertyKey Name of the property.
//      * @param receiver The reference to use as the `this` value in the setter function,
//      *        if `target[propertyKey]` is an accessor property.
//      */
//     function set(target: object, propertyKey: PropertyKey, value: any, receiver?: any): boolean;
// 
//     /**
//      * Sets the prototype of a specified object o to object proto or null.
//      * @param target The object to change its prototype.
//      * @param proto The value of the new prototype or null.
//      * @return Whether setting the prototype was successful.
//      */
//     function setPrototypeOf(target: object, proto: object | null): boolean;
// }

