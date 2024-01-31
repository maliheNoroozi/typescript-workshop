import { Equal, Expect } from '../../helpers';

/**
 * Implement a generic that extracts
 * the last element of a tuple.
 */
type Last<Tuple extends any[]> = Tuple extends [...infer First, infer Last] ? Last : never;;

// DO NOT CHANGE THE CODE BELOW
type res1 = Last<[1, 2, 3]>;
type test1 = Expect<Equal<res1, 3>>;

type res2 = Last<[1]>;
type test2 = Expect<Equal<res2, 1>>;

type res3 = Last<[]>;
type test3 = Expect<Equal<res3, never>>;
