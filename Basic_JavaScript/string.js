const name ="Aniket Kumar";
const another_name= new String("Aniket Kumar"); //create a string using construcor

console.log(name);
console.log(another_name);

console.log(another_name.__proto__) //give the object 
let len=name.length //give the length of string
console.log(len)

const new_name=another_name.toUpperCase();
console.log(new_name);
console.log(another_name);

const new_string = "   hacker   \n";

console.log(new_string.trim())
console.log(new_string)

const str="-aniket-Kumar-sai-mallawan";
const ar=str.split('-');
console.log(ar);


//new method for concatenate string to value and another
const age=20
const college_name="MNNIT";
console.log(`My name is ${name} and currently my age is ${age}.I am pursuing in ${college_name}`);