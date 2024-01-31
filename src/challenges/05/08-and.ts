import { Equal, Expect } from '../../helpers';

/**
 * Implement the AND logical door:
 * AND<true, true> => true
 * AND<false, false> => false
 * AND<true, false> => false
 * AND<false, true> => false
 *
 * Hint: you can check several values at once by wrapping
 *       them in a tuple type (pattern matching).
 */
type AND<A, B> = A extends false ? false : B extends false ? false : true;

// DO NOT CHANGE THE CODE BELOW
type res1 = AND<true, true>;
type test1 = Expect<Equal<res1, true>>;

type res2 = AND<false, false>;
type test2 = Expect<Equal<res2, false>>;

type res3 = AND<true, false>;
type test3 = Expect<Equal<res3, false>>;

type res4 = AND<false, true>;
type test4 = Expect<Equal<res4, false>>;
