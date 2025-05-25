// object literals method to define the object 


const mysymbol=Symbol("Anni")
const person={
    name:"Aniket",
   [mysymbol]:"Aniket",
    'full name':"Aniket Kumar",
    email:"abcdkumar@gmail.com",
    age:20,
    village:"Sai",
}

// console.log(person)

console.log(person.name)
console.log(person["full name"])
console.log(typeof person[mysymbol])
console.log(person)