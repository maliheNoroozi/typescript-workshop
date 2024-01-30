/**
 * Type `debounceFn` as a function with a `cancel` method on it.
 *
 * Hint: To tell TS a variable is a function, you can either
 * use the type `Function` or `(() => void)`.
 */

let debouncedFn: {
    (): void,
    cancel: () => void

};

debouncedFn = Object.assign(() => {}, { cancel: () => {} });

// ✅
debouncedFn();

// ✅
debouncedFn.cancel();

// ❌ `unknownMethod` does not exist on `debouncedFn`.
// @ts-expect-error
debouncedFn.unknownMethod();

// ❌ can't assign a string to `debouncedFn`.
// @ts-expect-error: ❌
debouncedFn = 'Hello';
