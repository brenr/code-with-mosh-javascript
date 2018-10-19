showPrimes(20);

// Prime (whos factors are only 1 and itself)
// Composite

// 12 = 1, 2, 3, 4, 6, 12
// Can be divided evenly by its factors

// 11 = 1, 11
// 13 = 1, 13

const start = new Date().getTime();
console.log(showPrimes(1000));

function showPrimes(limit) {
  const primesCache = new Array();

  for (let num = 2; num < limit; num++) {
    if (isPrime(num)) {
      primesCache.push(num);
    }
  }

  return primesCache.join('\n');
}

function isPrime(number) {
  for (let divisor = 2; divisor < number; divisor++) {
    // If we find the first evenly divisible factor we know
    // it's composite already
    if (number % divisor === 0) {
      return false;
    }
  }

  // Could never evaluate an evenly divisible factor so it's prime
  return true;
}

console.log('Computation time:', new Date().getTime() - start + 'ms');
