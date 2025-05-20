"use strict";//using new javascript features

let number="12";

console.log(typeof(number));

number=Number(number);//method used string to number conversion
console.log(number);

//"33"=>give integer number using Number method
//"33eee"=>give NaN(not a number) using Number method
//null=>give 0
//undefined=>give NaN using Number method
