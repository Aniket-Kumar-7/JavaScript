let date=new Date()
console.log(date)

console.log(date.toString())
console.log(date.toDateString())
console.log(date.toISOString())
console.log(date.toLocaleDateString())//for me best understanding date formate

//creating my own date
// let my_date=new Date(2025,4,25);
let my_date=new Date("2025-01-25")
console.log("My created date:",my_date.toLocaleDateString())
console.log(my_date.getDay())
console.log(my_date.getFullYear())
