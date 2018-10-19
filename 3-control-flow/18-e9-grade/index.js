const marks = [80, 80, 50];

// Average = 70

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

console.log(calculateGrade(marks));

function calculateGrade(marks) {
  // Get average
  const average = getAverage(marks);

  // Return letter definition
  return getLetterDef(average);
}

function getLetterDef(n) {
  if (n >= 90) return 'A';
  if (n >= 80) return 'B';
  if (n >= 70) return 'C';
  if (n >= 60) return 'D';
  return 'F';
}

function getAverage(array) {
  let sum = 0;
  for (let element of array) sum += element;
  return sum / array.length;
}
