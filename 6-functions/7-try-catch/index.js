

const person = {
    firstName: 'Brendan',
    lastName: 'Rosa',
    get fullName() { // using a getter like this allows us to access the return value as if it were a property
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value) { // using a setter like this allows us to assign a value using an assignment operator
        if(typeof value !== 'string')
            throw new Error('Value not a string!');

        const parts = value.split(' ');
        if(parts.length !== 2)
            throw new Error('Enter first and last name!');

        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try {
    person.fullName = '';
} catch(e) {
    console.error(e);
} finally {
    console.log(person);
}
