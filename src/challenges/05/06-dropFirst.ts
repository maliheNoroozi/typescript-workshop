import { Equal, Expect } from '../../helpers';

/**
 * Implement a generic that drops the first
 * element of a tuple and returns all other
 * elements.
 */
type DropFirst<Tuple extends any[]> = Tuple extends [infer First, ...infer Rest] ? Rest : [];

// DO NOT CHANGE THE CODE BELOW
type res1 = DropFirst<[1, 2, 3]>;
type test1 = Expect<Equal<res1, [2, 3]>>;

type res2 = DropFirst<[1]>;
type test2 = Expect<Equal<res2, []>>;

type res3 = DropFirst<[]>;
type test3 = Expect<Equal<res3, []>>;
