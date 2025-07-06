let a = [4, 5, 8, 9, 25, 18]; // array are the muttable means when we make change then the original array will be changed while strings are immutable
// console.log(a);
// console.log(a.toString());
// console.log(a.join("ankit"));
// a.pop(); //remove last element and shift removes the first element
// console.log(a);
// a.push(" ankit ")  // add the element in the last and unshift add the element in first
// console.log(a);
// let r = [4,8,6,32,25];
// console.log(a.concat(r));
// console.log(a.splice(2,4, 58 , 69));
// console.log(a);
// console.log(a.slice(1 , 3 )); // jha se doge vha se element htana shurur krega aur jo doosri value hogi usse ek  pehle ruk jayega
// console.log(a.slice(2 )); // ye new array bna deta hai purane vale mein change nhi krta hai

// console.log(a);
// a.forEach((value , index , arr)=>
// {
//     console.log(value , index ,arr);
// })
// let obj ={
//  j:45,
//  l:2,
//  d:4
// }
// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(element , key);

//     }
// }
// for (const human of a) {
//     console.log(human)
// }
// let newarr = [];
// console.log("mindful")
// newarr = a.map((p)=>
// {
//     console.log("check");

//     return p**2;
// })
// console.log(newarr)
// const greaterthansix = (h) => {
//     if (h > 6) {
//         return true;
//     }
//     return false;
// }
// console.log(a.filter(greaterthansix));
let arr3 = [1,2,3,4,5]
const multiply = (a,b) =>
{
    return a*b;
}
console.log(arr3.reduce(multiply));