showStars(10);

function showStars(rows) {
  const rowArray = new Array(rows);
  const CHAR = '* ',
    PAD_CHAR = ' ';

  for (let rowNum = 0; rowNum < rows; rowNum++) {
    let leftPad = Array(rows - rowNum).join(PAD_CHAR);
    rowArray[rowNum] = leftPad + Array(rowNum + 2).join(CHAR);
    // Array joins are so underrated
  }

  console.log(rowArray.join('\n'));
}
