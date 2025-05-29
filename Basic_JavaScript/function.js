function addTwoNumbers(numberone=3,numbertwo){//default value is set as three if not any other value is given.//otherwise override.
    if (typeof(numberone)!=Number || typeof(numbertwo)!=Number){
        numberone=Number(numberone)
        numbertwo=Number(numbertwo)
    }
    return numberone+numbertwo
}
let result=addTwoNumbers(5,4)
// console.log(result)


const user ={
    name:"aniket",
    age:20
}

function print(anything){
    return `user name is ${anything.name} and age is ${anything.age}`
}   
// console.log(print(user))
// or
// console.log(print({
//     name:"Aniket",
//     age:20
// })


function print_Element(array){
    return array[2]
}

const array=[100,100,200]
// console.log(print_Element(array)) 


//example of  variable function
const sum=function(...numbers){
    let initial_sum=0
    for(let i=0;i<numbers.length;i++){
        initial_sum+=numbers[i]
    }
    return initial_sum
}

// console.log(sum(3,4,5))

const person ={
    name :"Aniket",
    id:20233052,
    message:function(){
        console.log(`hello! ${this.name} how are you! I hope you'r well.`)
        console.log(this)
    }
}
// person.name="Anni"
// console.log(person.message())

// console.log(this)


//arrow function
const arrow_function=()=>{
    const myname="Aniket"
    console.log(myname)
}

// arrow_function()

// if you have only one line operation
const number_add=(number1,number2)=>(number1+number2);
// console.log(number_add(5,5))

// IIFE ()()
//always remember the ; for ending the function 
(function newprogram(){
    console.log(`I am Aniket Kumar.`)
})();

(function(){console.log("hello ")})();

((name)=>{console.log(`hello.... ${name}`)})("Aniket");