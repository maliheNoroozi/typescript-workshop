import { Equal, Expect } from "../../helpers";

/**
 * `safeHead` takes an array, a default value
 * and returns the first element of the array
 * if it isn't empty. Make it generic!
 */

function safeHead<T>(array: T[], defaultValue: T): T {
  return array[0] ?? defaultValue;
}

// DON'T CHANGE ANYTHING BELOW THIS LINE
let input1 = [1, 2, 3];
let res1 = safeHead(input1, 0);

type test1 = Expect<Equal<typeof res1, number>>;

let input2 = ["Hello", "Hola", "Bonjour"];
let res2 = safeHead(input2, "Hi");

type test2 = Expect<Equal<typeof res2, string>>;
