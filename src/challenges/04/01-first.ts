import { Equal, Expect } from '../../helpers';

/**
 * Implement a generic that returns the first type
 * in a tuple.
 *
 * Hint: How would you do it if `Tuple` was a value?
 */
type First<Tuple extends any[]> = Tuple extends [infer F, ...infer Rest] ? F : undefined;

// DO NOT CHANGE THE CODE BELOW
type res1 = First<[]>;
type test1 = Expect<Equal<res1, undefined>>;

type res2 = First<[string]>;
type test2 = Expect<Equal<res2, string>>;

type res3 = First<[2, 3, 4]>;
type test3 = Expect<Equal<res3, 2>>;

type res4 = First<['a', 'b', 'c']>;
type test4 = Expect<Equal<res4, 'a'>>;
