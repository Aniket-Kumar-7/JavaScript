// object literals method to define the object 


const mysymbol = Symbol("Anni")
const person = {
    name: "Aniket",
    [mysymbol]: "Aniket",
    'full name': "Aniket Kumar",
    email: "abcdkumar@gmail.com",
    age: 20,
    village: "Sai",
}

// console.log(person)

console.log(person.name)
console.log(person["full name"])
console.log(typeof person[mysymbol])
console.log(person)

person.fun = function () {
    console.log(`hello! ${person["full name"]} and your age is ${this.age}`);
}

person.fun()

//Singleton object

const user = new Object()
// or
// const user={}
user.name = "Aniket Kumar"
user.id = 2023302
user.address = "Sai"
user.grade = "A"
console.table(user)

// object nesting
const newuser = {
    fullname1: {
        firstname2: {
            name1: "Anni"
        },
        secondname2: {
            lastname: "Kumar"
        }
    }
}
// console.log(newuser.fullname1.firstname2.name1)

// combine the objects
const a = { a: 'a', b: 'b' }
const b = { c: 'c', d: 'd' }
const c = { e: 'e', f: 'f' }

const d = { ...a, ...b, ...c }
console.log(d)

const myArray = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Peter", age: 35 }
];

const secondObject = myArray[1];
console.log(secondObject); 