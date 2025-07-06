let a= 12;
function fact (num)
{
    let arrr = Array.from(Array(num+1).keys())
console.log(arrr.slice(1,))
let c = arrr.slice(1,).reduce ((a, b) => {
return a*b
})
console.log(c)

}
fact(a)