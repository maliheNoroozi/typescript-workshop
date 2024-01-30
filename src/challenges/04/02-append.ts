import { Equal, Expect } from '../../helpers';

/**
 * Implement a generic that adds a type to the end
 * of a tuple.
 */
type Append<Tuple extends any[], Element> = [...Tuple, Element];

// DO NOT CHANGE THE CODE BELOW
type res1 = Append<[1, 2, 3], 4>;
type test1 = Expect<Equal<res1, [1, 2, 3, 4]>>;

type res2 = Append<[], 1>;
type test2 = Expect<Equal<res2, [1]>>;
