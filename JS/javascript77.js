
function createcard(title , channelname , views , monthold , duration , thumbnail)
{
    let viewcalc;
    if(views <100000)
    {
         viewcalc = views /1000 + "k"
    }
    else if (views>1000000)
    {
  viewcalc= views/1000000 + "M"
    }
    else{

    }
    let html =` <div class="card">
            <div class="image">
            <img src="${thumbnail}" alt="">
            <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1> ${title}</h1>
                <p>${channelname} . ${viewcalc} views . ${monthold} months ago</p>
            </div>
        </div>`
        document.querySelector(".container").innerHTML= document.querySelector(".container").innerHTML + html
}
createcard("web development  " , "codewithharry" , 70000 , 3 , "35:10" , "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDWfGPsuQKuWateaRbWeBo1MDhM3A");