/**
 * If a customer has more than 100 points, they are
 * a 'gold' customer, otherwise, the yare a 'silver' customer.
 */

let points = 90;
let type = points > 100 ? 'gold' : 'silver';

console.log(type);
type += 20;
console.log(type);
