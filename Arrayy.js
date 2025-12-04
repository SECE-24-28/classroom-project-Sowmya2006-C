// //DIFF B/W VAR AND LET
// // var x=100;
// // var z=100;
// // console.log(x)
// // //--------------
// // let x=200;
// // let z=200;
// // console.log(z)
// //--------------
// let arr=["sowmya","valar","visalini"]
// console.log(arr)
// console.log(arr.toString())
// //---------------
// let arr=["sowmya","valar","visalini"]
// arr.push("sugatha");
// console.log(arr)
// //-----------------
// let arr=["sowmya","valar","visalini"]
// arr.unshift("sugatha");
// console.log(arr)
// //-----------------
// let arr=["sowmya","valar","visalini"]
// arr.pop(); //del the info at last index
// console.log(arr)
// //--------------
// let arr=["sowmya","valar","visalini"]
// arr.shift(); //del the info at 0th index
// console.log(arr)
// //-----------------
// console.log(arr)
// delete arr[1] //data is deleted but the space specified for it will remain
// console.log(arr)
// //----------
// console.log(arr)
// arr.splice(0,1) //start from 0th index and delete till length 1 ie. only one data
// console.log(arr)
// //----------
// console.log(arr)
// arr.slice(0,1) //start from 0th index and delete till length 1 ie. only one data
// console.log(arr)

// var x=100;
// var x=200;
// console.log(x);
// let z=100;
// let z=200;
// console.log(z);
let arr=["Valar","Tian Xu Ning","Jungkook"];
arr.unshift("Keen");
console.log(arr);
arr.push("V");
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
arr.splice(1,1,"Tian Xu");
console.log(arr);
arr.splice(1,2);
console.log(arr);
arr.unshift("Keen","V");
console.log(arr);
arr.push("Jimin","RM");
console.log(arr);
let newArr=arr.slice(0,2);
console.log(newArr);