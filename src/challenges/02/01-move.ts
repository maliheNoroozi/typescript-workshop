/**
 * Type the `move` function so that the `direction`
 * parameter can only be assigned to "backward" or "forward".
 */
type Direction = "forward" | "backward"

function move(direction: Direction) {
  // some imaginary code that makes the thing move!
}

// DO NOT CHANGE THE CODE BELOW
// ✅
move('backward');

// ✅
move('forward');

// @ts-expect-error: ❌ not supported
move('left');

// @ts-expect-error: ❌ not supported
move('right');
