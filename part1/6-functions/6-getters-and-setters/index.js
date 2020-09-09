
const person = {
    firstName: 'Brendan',
    lastName: 'Rosa',
    get fullName() { // using a getter like this allows us to access the return value as if it were a property
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value) { // using a setter like this allows us to assign a value using an assignment operator
        // assuming the string will always be two words of course
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = "John Doe";
console.log(person);

