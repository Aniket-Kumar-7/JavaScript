const number=100
console.log(`${number} and ${typeof(number)}`);

const new_number=new Number(200);
console.log(new_number,`${typeof(new_number)}`)


console.log(number.toFixed(3)) //give the data at most 3position after decimal
const convert=number.toString()//convert the number into string
console.log(number.toString().length,`${typeof(number)}`) //convert number to string

const new_number_=112.25
console.log(new_number_.toPrecision(2))


const hundred=10000000
console.log(hundred.toLocaleString('en-In'))

// 'use Math library'
console.log(Math)
console.log('Round number between 1 to 10 ',Math.round((Math.random()*10)+1))
console.log(Math.abs(-1))
console.log(Math.ceil(5.2))
console.log(Math.floor(5.4))

