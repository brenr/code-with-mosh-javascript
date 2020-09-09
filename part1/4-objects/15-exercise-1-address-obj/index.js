/**
 * Properties:
 *  street
 *  city
 *  zipCode
 *
 * Methods:
 *  showAddress(address)
 */

let address = {
  street: '1 Hacker Way',
  city: 'Beverley Hills',
  zipCode: 12345
};

function showAddress(address) {
  let out = '';
  for (let key in address) {
    out += `${key}: ${address[key]}\n`;
  }
  return out;
}

console.log(showAddress(address));
