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