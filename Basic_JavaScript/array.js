const array=['Aniket',1,3,4,5,"Kumar",true]//first way to represent the array


const new_array=new Array(1,3,4,55,"Aniket")//second way for representing the array
// console.log(new_array)

array.push("Anni")//for inserting the element in array
array.pop()//for removing the last element from the array

array.unshift("Anni")//inserting the element in array
array.shift()//removing the element from the starting


// console.log(array.includes("Aniket"))//for checking the element in array
// console.log(array.indexOf("Kumar"))//give the index of element 

// console.log(array)

// console.log("A",array.slice(1,3))//cut into the pieces

// console.log(array.splice(0,3,"aniket","ANIKET","AnIkEt"))//add three element at index 0 with removing 3 element in original array
// console.log(array.splice(1,0,"Ak"))//add Ak at index 1 with removing 0 index
// console.log(array)
const array2=[23,2,4,'ds','Ani']
// console.log("B",array2.splice(1,3))//removing the element from 1 to 3

// console.log(array2)

const first=['name','phone_number','address','college'];
const second=['Aniket',999999,'sai','mnnit']
// first.push(second)

// const third_array=first.concat(second);//we concatenate only two array in one time 
const third_array=[...first,...second]//we concatenate multiple array in same time
console.table([third_array])
