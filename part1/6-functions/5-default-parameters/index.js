
// New in ES6 we have default values that may be defined right in the parameters within the constructor
// Pro tip: Prioritize making parameters that have a default value the last in the list
function interest(principal, rate = 3.5, years = 5) {

    // Need default values? This below is bad design as a scenario that presents itself with values of 0,
    // we may get unintended results. Don't do the below. Instead, ES6 has convenient defaults in method constructor
    //rate = rate || 3.5;
    //years = years || 5;

    return principal * rate / 100 * years;
}

console.log(interest(10000, 3.5, 5));