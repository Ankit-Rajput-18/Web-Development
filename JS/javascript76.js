// async function getData()
// {
// return new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve(455);
//     }, 3500);
// })
// }
async function getData()
{
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
     method: 'POST',
     body : JSON.stringify({
        title:'foo',
        body:'bar',
        userId: 1,
     }),
     headers:{
'content-type':'application/json; charset=UTF-8',
     },
    })
    let data = await x.json()
    console.log(data);
    
}
async function main() {
    

console.log("loading modules");

console.log('do something');


console.log('load data');
let data =  await getData()
console.log(data);
console.log('process data');
console.log('task 2');
}
main();

// data.then((v)=>{

//     console.log(data);
    
    
//     console.log('process data');
// })

