/**
 * Type the `stringify` function to take any kind of input.
 *
 * Don't use `any`!
 */

function stringify(input: unknown) {
  return input instanceof Symbol ? input.toString() : `${input}`;
}

stringify('a string'); // ✅
stringify(12); // ✅
stringify(true); // ✅
stringify(Symbol('cat')); // ✅
stringify(20000n); // ✅
