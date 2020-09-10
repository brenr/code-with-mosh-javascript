### let and const
Use `let` and `const` and not `var`.

### Conventions
* Factory functions are in camelCase
* Constructor functions are in PascalNotation

### Under the hood
* The `new` keyword prefixed on a function call creates an object and the `this` refers to the object of the scope it's within.
* Every object has a constructor property which is a reference to the function that created the object.
* Functions are objects
  * `name` returns the name of the function
  * `length` returns the amount of parameters

### Value & Reference Types
| Value       | Reference   |
|-------------|-------------|
| `Number`    | `Object`    |
| `String`    | `Function`  |
| `Boolean`   | `Array`     |
| `Symbol`    |             |
| `undefined` |             |
| `null`      |             |
* Primitives are copied by their value
* Objects are copied by their reference

