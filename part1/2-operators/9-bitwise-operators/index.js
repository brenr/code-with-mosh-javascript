// 1 =    00000001
// 2 =    00000010
console.log(1 | 2); // -> 3
// Result 00000011

// Read, Write, Execute
// 00000100 Read
// 00000010 Write
// 00000001 Execute
const readPermission = 4;
const writePermission = 2;
const execPermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;

let message = myPermission & readPermission ? 'yes' : 'no';

/**
 * Notes
 *
 * Bitwise OR (|)
 * Returns 1 in the bit place if either are 1
 *
 * Bitwise AND (&)
 * Returns 1 in the bit place if both are 1
 *
 * Use case
 * Packing multiple values into a single integer.
 */
