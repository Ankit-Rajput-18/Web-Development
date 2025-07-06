let random =Math.random();
let a = prompt("enter the a value");
let c = prompt("enter the operator")
let b = prompt("enter the b value");
let obj ={
    "+" : "-",
    "*":"+",
    "-" : "/",
    "/" : "**",
}
if(random > 0.1) //do right solution
{
alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    c=obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

   
}