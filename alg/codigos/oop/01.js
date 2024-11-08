const person = {
    name: {
        first: "Bob",
        last: "Smith",
    },
    age: 32,
    bio: function () {
        console.log(`${this.name.first} ${this.name.last} is ${this.age} years old.`);
    },
    introduceSelf: function () {
        console.log(`Hi! I'm ${this.name.first}.`);
    },
};

console.log(person.name, person.name.first, person.age); // [ 'Bob', 'Smith' ] Bob 32
person.bio(); // "Bob Smith is 32 years old."
person.introduceSelf(); // "Hi! I'm Bob."

console.log(person.name.first, person.name.last); // Bob Smith

person.bio(); // Bob Smith is 32 years old.

person.age = 45;
person["name"]["last"] = "Cratchit";

person.bio(); // Bob Cratchit is 45 years old.

person["eyes"] = "hazel";
person.farewell = function () {
    console.log("Bye everybody!");
};

console.log(person["eyes"]); // hazel
person.farewell(); // Bye everybody!

console.log(person.height); // undefined
const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;
console.log(person.height); // 1.75m

const first = "Alice";
const last = "Johnson";
const age = 40;
const otherperson = { name: { first, last }, age };

console.log(otherperson.name, otherperson.age) // { first: 'Alice', last: 'Johnson' } 40


const introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
};

const person1 = { name: 'Chris', introduceSelf };
const person2 = { name: 'Deepti', introduceSelf };

person1.introduceSelf();
person2.introduceSelf();

function Person(name) {
    this.name = name;
    this.introduceSelf = function () {
        console.log(`Hi! I'm ${this.name}.`);
    };
}

const person3 = new Person("Salva");
person3.introduceSelf(); // "Hi! I'm Salva."

const person4 = new Person("Frankie");
person4.introduceSelf(); // "Hi! I'm Frankie."

const atext = new String('foo')
const alist = new Array(atext)
alist.push('bar')
console.log(alist[0].toUpperCase(), alist[1]) // FOO bar