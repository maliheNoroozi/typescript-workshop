import { Equal, Expect } from "../../helpers";
/**
 * `map` transforms all values in an array to a value of
 * different type. Make it generic!
 */
function map<T, U>(array: T[], fn: (value: T) => U): U[] {
  return array.map(fn);
}

// DON'T CHANGE ANYTHING BELOW THIS LINE
let input1 = [1, 2, 3];
let res1 = map(input1, (value) => value.toString());

type test1 = Expect<Equal<typeof res1, string[]>>;

let input2 = ["Hello", "Hola", "Bonjour"];
let res2 = map(input2, (str) => str.length);

type test2 = Expect<Equal<typeof res2, number[]>>;
