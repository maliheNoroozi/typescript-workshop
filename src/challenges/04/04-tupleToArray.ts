import { Equal, Expect } from '../../helpers';

/**
 * Implement a generic taking a tuple and returning
 * an array containing the union of all values in this tuple.
 */
type TupleToArray<Tuple extends any[]> = (keyof {
    [key in Tuple[number]]: undefined
})[];



// DO NOT CHANGE THE CODE BELOW
type res1 = TupleToArray<[1, 2, 3]>;
type test1 = Expect<Equal<res1, (1 | 2 | 3)[]>>;

type res2 = TupleToArray<[number, string]>;
type test2 = Expect<Equal<res2, (number | string)[]>>;

type res3 = TupleToArray<[]>;
type test3 = Expect<Equal<res3, never[]>>;

type res4 = TupleToArray<[1] | [2] | [3]>;
type test4 = Expect<Equal<res4, (1 | 2 | 3)[]>>;
