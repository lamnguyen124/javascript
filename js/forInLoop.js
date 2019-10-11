const person = {
    name: 'Ally',
    age: 1
};

for (let key in person)
    console.log(key, person[key]);

//Dot Notation
// person.name

//Bracket Notation
// person['name']

const colors = ['red', 'green', 'blue'];

for (let index in colors)
    console.log(index, colors[index]);