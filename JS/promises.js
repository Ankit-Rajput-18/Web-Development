console.log('this is promises');


let prom1 = new Promise((resolve, reject)=>{
    let a = Math.random;
    if(a < 0.5)
    {
        reject("No random number was not supporting");
    }
       else{

            setTimeout(()=>{
                console.log('yes i am done');
                resolve("ankit");
            }, 2000);
        }
    
})
let prom2 = new Promise((resolve, reject)=>{
    let a = Math.random;
    if(a < 0.5)
    {
        reject("No random number was not supporting 2");
    }
       else{

            setTimeout(()=>{
                console.log('yes i am done 2');
                resolve("ankit 2");
            }, 1000);
        }
    
})
let p3 = Promise.allSettled([prom1 , prom2])
p3.then((a)=>{
    console.log(a); 
}).catch((err)=>{
    console.log(err); 
})
