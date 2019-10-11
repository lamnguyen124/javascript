// Logical AND (&&)
// Returns TRUE if both operands are TRUE

// Logical OR (||)
// Returns TRUE if one of the operands is TRUE
console.log(true && true);

let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;

console.log('Eligible', eligibleForLoan);

// NOT (!)
let applicationRefused = !eligibleForLoan;
console.log('Application Refused', applicationRefused);

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);
