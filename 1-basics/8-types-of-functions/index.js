function greet(name, lastName) {
  console.log('Hello, ' + name + ' ' + lastName);
}

function square(num) {
  return num * num;
}

console.log(square(2));
// ^ 2 function calls. square(2) is resolved first, then passed as an
// argument to the console.log() function
