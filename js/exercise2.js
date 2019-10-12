function addingTwoNumbers(a,b){
    return a + b;
}

console.log(addingTwoNumbers(6, 4));

function max(a, b) {
    // if (a > b)
    //     return a;
    // else
    //     return b;
    return (a > b) ? a : b;
}

let number = max(1, 2);
console.log(number);

function isLandscape(width, height) {
   return (width > height);
}

console.log(isLandscape(400, 200));

function fizzBuzz(input) {
    if (typeof input !== 'number')
        return NaN;
    else if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzzz';
    else if (input % 3)
        return "fizz";
    else if (input % 5)
        return "buzz";
    else
        return input;
}

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed <= speedLimit + kmPerPoint) {
        console.log("ok");
        return;
    }
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12)
        console.log('License Suspended');
    else
        console.log('Points', points);
}

checkSpeed(130);