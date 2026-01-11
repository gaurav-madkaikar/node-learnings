const add = (a, b) => a + b;
const addN = (a) => ++a;

console.log(add(2, 3));
console.log(addN(5));

// objects in js
const person = {
    name: "Gaurav",
    age: 23,
    greet() {
        console.log(`Hello ${this.name} here!`);
    }
};

console.log(person);
// destructuring
const { name, age } = person;
console.log(`${name} || ${age}`); // using template literals
person.greet();



const hobbies = ['sports', 'cooking', 123, true];
// for (const hobby of hobbies) {
//     console.log(hobby);
// }
// for(let i=0;i<hobbies.length;i++){
//     console.log(hobbies[i]);
// }
// Array methods
const hobbiesModified = hobbies.map(hobby => "Hobby: " + hobby);
console.log(hobbiesModified);

const hobbiesFiltered = hobbies.filter(hobby => typeof hobby === 'string');

console.log(hobbiesFiltered);

const values = [1, 2, 3, 4, 5];
console.log(values.includes(6));

const valuesRedSum = values.reduce((currSum, val) => {
    return currSum + val;
}, 0);
console.log(valuesRedSum);

// no return value, but a fn will be applied to each element
// No need of 'for' loops
let product = 1;
values.forEach((val) => product *= val);
console.log("Product of values: " + product);

// Spread and rest operators
// spread operator
const numbers = [1, 2, 3, 4, 5];
// can still push elements but not assign a new array to it
numbers.push(6);
console.log(numbers);

// shallow copy of an array
const copiedArray = [...hobbiesFiltered];
// shallow copy of an object
const copiedObj = { ...person }
console.log(copiedArray);
console.log(copiedObj);

// rest operator
const toArray = (...args) => {
    console.log(`Type: ${typeof args}`); // typeof args is object
    // returns an array of all the arguments passed to the function
    return args;
};
console.log(toArray(1, 2, 3, 4, 5));