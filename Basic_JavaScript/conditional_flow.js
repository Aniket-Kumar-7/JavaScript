//Nullish Coalescing Operator ??
let value;
// value = 5?? 10
value = null ?? 6
// console.log(value)


// for of loop
// let name = "Aniket"
// for(const i of name){
//     console.log(i)
// }

let map = new Map()
map.set('name', "aniket")
map.set("village", "Sai")
// console.log(map)

for (const [key, value] of map) {
    // console.log(key,":-",value)
}


// **** object is not iterable like map **** 

const my_object = {
    name: "Aniket"
    , class: 10,
    village: "Sai"

}

for (const key in my_object) {
    // console.log(`${key} and value is ${my_object[key]}`)
}


// example of for each function
const language = ['js', 'java', 'python', 'cpp']
language.forEach(function (value) {
    // console.log(value)
})

language.forEach(print)

function print(item) {
    // console.log(item)
}

const my_array = [
    {
        my_name: "Aniket",
        my_college: "don't"
    }
    , {
        my_name: "don't",
        my_college: "i Know"
    }
]

my_array.forEach((item) => {
    // console.log(item.my_college,item.my_name);

})


// use of filter in array

const new_array = [2, 3, 4, 5, 6, 4, 4, 5, 5]

// console.log(new_array.filter((item) => {
//     return item % 2 === 0
// }))

const another_array=[3,5,6,2,4]
console.log(another_array.map((item)=>item+1).map((item)=>item+2).filter((item)=>{return item%2===0}))


// reduce function 
// Assume initial value is 0
// accumulator=accumulator+currentval
// in starting accumulator=initial_value
const initial_value=0
// console.log(new_array.reduce(function(accumulator,currentval){
//     console.log(`accumulator ${accumulator} and currentvalue ${currentval}`)
//     return accumulator+currentval
// },0))

// console.log(new_array.reduce((accumulator,currentvalue)=>{
//     return accumulator+currentvalue
// },0))


// real life example
const shopping_cart=[
    {
        course:"cpp course",
        price:500
    },
    {
        course:"java course",
        price:100
    },
    {
        course:"python course",
        price:400
    },
    {
        course:"c course",
        price:300
    }
]

console.log(shopping_cart.reduce((accumulator,item)=>
    accumulator+item.price,0))