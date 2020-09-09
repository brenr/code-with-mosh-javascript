let x = 10;
let y = x;
x = 20;
// x -> 20
// y -> 10

let a = { value: 10 };
let b = a;
// a -> 20
// b -> 20

/**
 * Notes
 *
 * In JavaScript,
 * When copying a variable to another, primitives allocate new memory
 * whereas copying an object just copies the the address of the location
 * in memory, the reference.
 *
 * Primitives are copied by their value
 * Objects are copied by their reference
 */

let numberPrim = 10;
function increase(num) {
  num++;
}
increase(numberPrim);
// numberPrim -> 10

let numberObj = { value: 10 };
function increase(num) {
  num.value++;
}
increase(numberObj);
// numberObj.value -> 11

/**
 * Notes
 * +--------------+-----------------+
 * | Value Types  | Reference Types |
 * +--------------+-----------------+
 * | Number       | Object          |
 * | String       | Function        |
 * | Boolean      | Array           |
 * | Symbol       |                 |
 * | undefined    |                 |
 * | null         |                 |
 * +--------------+-----------------+
 */
