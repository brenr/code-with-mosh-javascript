let address1 = new Address('1 Hacker Way', 'New York', 00001);
let address2 = new Address('1 Hacker Way', 'New York', 00001);

// Address object constructor
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

// Different references in memory but props and vals are equal
function areEqual(address1, address2) {
  for (let k in address1) {
    if (
      address1.constructor != address2.constructor ||
      address1[k] != address2[k]
    ) {
      return false;
    }
  }
  return true;
}

// Points to same object reference in memory
function areIdentical(address1, address2) {
  return address1 === address2;
}

console.log('addr1 equal to addr2\t\t? ' + areEqual(address1, address2));
console.log('addr1 identical to addr2\t? ' + areIdentical(address1, address2));
