showNumbers(10);

function showNumbers(limit) {
  for (let n = 0; n <= limit; n++) {
    console.log(n, n & 1 ? 'ODD' : 'EVEN');
  }
}
