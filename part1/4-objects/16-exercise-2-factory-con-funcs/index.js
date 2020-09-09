const addr1 = createAddress('123 Other Way', 'New York', 10101);
const addr2 = new Address('123 Other Way', 'New York', 10101);

console.log(addr1);
console.log(addr2);

// Factory function (creates anonymous object)
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode
  };
}

// Constructor function (creates named object)
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}
