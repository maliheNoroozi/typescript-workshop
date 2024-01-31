import { Equal, Expect } from '../../helpers';

/**
 * Implement a generic that checks if
 * a type is an array.
 */
type IsArray<T> = T extends any[] ? true : false;

// DO NOT CHANGE THE CODE BELOW
type res1 = IsArray<number[]>;
type test1 = Expect<Equal<res1, true>>;

type res2 = IsArray<['a', 'b', 'c']>;
type test2 = Expect<Equal<res2, true>>;

type res3 = IsArray<'Not an array'>;
type test3 = Expect<Equal<res3, false>>;

type res4 = IsArray<string | null | undefined>;
type test4 = Expect<Equal<res4, false>>;
