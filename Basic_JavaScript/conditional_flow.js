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
map.set('name',"aniket")
map.set ("village","Sai")
// console.log(map)

for(const [key,value] of map){
    console.log(key,":-",value)
}


// **** object is not iterable like map **** 

const my_object={
    name:"Aniket"
    ,class:10,
    village:"Sai"

}

for(const key in my_object){
    console.log(`${key} and value is ${my_object[key]}`)
}


// example of for each function
const language=['js','java','python','cpp']
language.forEach(function(value){
    // console.log(value)
})

language.forEach(print)

function print(item){
    console.log(item)
}

const my_array=[
    {
        my_name:"Aniket",
        my_college:"don't"
    }
    ,{
        my_name:"don't",
        my_college:"i Know"
    }
]

my_array.forEach((item)=>{
    console.log(item.my_college,item.my_name);
    
})


// use of filter in array

const new_array=[2,3,4,5,6,4,4,5,5]

console.log(new_array.filter((item)=>{
    return item%2===0
}))