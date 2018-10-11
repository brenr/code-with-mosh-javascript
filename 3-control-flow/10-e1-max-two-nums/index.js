let number = max(1, 2);
console.log(number);

function max(a, b) {
  // Math class is better implementation
  // return Math.max(a,b);
  return a > b ? a : b;
}

/**
 * When writing functions, have several test cases to ensure
 * the full compatibility so no edge cases slip through.
 */
