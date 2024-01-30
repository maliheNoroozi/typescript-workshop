import { Equal, Expect } from '../../helpers';

/**
 * `pickOne` takes 2 arguments of potentially different
 * types and return either one or the other at random.
 * Make  generic!
 */
function pickOne<T, U>(a: T, b: U): T | U {
  return Math.random() > 0.5 ? a : b;
}

// DO NOT CHANGE THE CODE BELOW
const res1 = pickOne(true, false);
type test1 = Expect<Equal<typeof res1, boolean>>;

const res2 = pickOne(1, 2);
type test2 = Expect<Equal<typeof res2, 1 | 2>>;

const res3 = pickOne(2, 'some string');
type test3 = Expect<Equal<typeof res3, 2 | 'some string'>>;

const res4 = pickOne(true, 7);
type test4 = Expect<Equal<typeof res4, true | 7>>;
