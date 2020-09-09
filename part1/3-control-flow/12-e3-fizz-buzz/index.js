/*
 * Requirements
 * Divisible by 3 -> Fizz
 * Divisible by 5 -> Buzz
 * Divisible by both 3 and 5 -> FizzBuzz
 * Otherwise if not divisible by either -> input
 * If it's not a number -> 'Not a number'
 */

function fizzBuzz(n) {
  if (typeof n !== 'number') return NaN;

  const isFizz = n % 3 === 0;
  const isBuzz = n % 5 === 0;

  return (isFizz ? 'Fizz' : '') + (isBuzz ? 'Buzz' : '') || n;
}

for (let i = 0; i <= 100; i++) {
  console.log(fizzBuzz(i));
}
