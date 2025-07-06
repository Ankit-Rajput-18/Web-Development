let a = prompt("enter the first number")
let b = prompt("enter the second number");
if(isNaN(a) || isNaN(b))
{
throw SyntaxError("sorry unable to solve")   
}
let sum =  parseInt(a) + parseInt(b) ;
    // console.log('the sum is ' + sum*h);

try{

    console.log('the sum is ' + sum*h);
}
 
catch{
    console.log('check first then give values');
    
}
finally{ // jab hm kisi function mein ho toh agr usme return statement ho aur hme uske bad ki line print krani ho tb use krte hai 
    console.log('all whwn it comes');
    
}
    

