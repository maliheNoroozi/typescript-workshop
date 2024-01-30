import { Equal, Expect } from "../../helpers";

/**
 * `pipe2` takes a value and pipes it into 2 functions
 * sequentially. For example, `pipe2(x, f1, f2)` will
 * result in `f2(f1(x))`. Make it generic!
 */

function pipe2<T, U, V>(
  x: T,
  f1: (value: T) => U,
  f2: (value: U) => V,
): V {
  return f2(f1(x));
}

// DON'T CHANGE ANYTHING BELOW THIS LINE
let res1 = pipe2(
  [1, 2, 3],
  (arr) => arr.length,
  (length) => `length: ${length}`,
);

type test1 = Expect<Equal<typeof res1, string>>;

let res2 = pipe2(
  { name: "Alice" },
  (user) => user.name,
  (name) => name.length > 5,
);

type test2 = Expect<Equal<typeof res2, boolean>>;
