"use strict";//using new javascript features

let number="12";

console.log(typeof(number));

number=Number(number);//method used string to number conversion
console.log(number);

//"33"=>give integer number using Number method
//"33eee"=>give NaN(not a number) using Number method
//null=>give 0
//undefined=>give NaN using Number method

let number2=23;

number2=String(number2)//convert number as a string 
console.log(typeof(number2))
console.log(number2)


let number3="";//give false on empty string otherwise give true
number3=Boolean(number3);//convert the boolean number true or false 
console.log(number3)


let id = Symbol(123)//define the unique id for every variable
let anotherid=Symbol(123)

console.log("id output",anotherid==id)//gives false

const array=["aniket","Kumar","sai"]
console.log(array)


//DataType ->
//number
//boolean
//string
//undefined