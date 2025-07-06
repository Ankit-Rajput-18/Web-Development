// let a ="harman";
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[3]);
// console.log(a[4]);
// let b ="amir";
// console.log(b.toUpperCase());
// console.log(b.lastIndexOf("r"));
// console.log(b.toLowerCase());
// console.log(b.concat(a));
 let ankit = document.getElementById("btn")
 ankit.addEventListener("click" ,()=>{
document.querySelector(".box").innerHTML = "you click ragini now you are out of the box"
document.querySelector(".box").style.backgroundColor = "yellow"

})
 ankit.addEventListener("dblclick" ,()=>{
    document.querySelector(".box").innerHTML = "you click  two times ragini"
})
   ankit.addEventListener("contextmenu" ,()=>{
    alert("the click happens succesfully")
   })
   ankit.addEventListener("keydown" ,(e)=>{
console.log(e)   })
