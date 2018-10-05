/**
 * Logical AND (&&)
 * Returns TRUE if both operands are TRUE
 *
 * Logical OR (||)
 * Returns TRUE if the first operand evaluated is TRUE
 *
 * NOT (!)
 * Flips the boolean, so it will give you the opposite.
 */

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome || goodCreditScore;

console.log('Eligible', eligibleForLoan);

let applicationRefused = !eligibleForLoan;
console.log('Application Refused', applicationRefused);
