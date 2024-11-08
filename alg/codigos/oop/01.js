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
