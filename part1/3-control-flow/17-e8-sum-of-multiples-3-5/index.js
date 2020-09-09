console.log(sum(10));

// Multiples of 3: 3, 6, 9
// Multiples of 5: 5, 10

function sum(limit) {
  let sum = 0;

  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

/**
 * Notes
 *
 * As part of convention, lines that are highily related
 * should be next to each other, otherwise we separate them
 * with line breaks.
 */
