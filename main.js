const toggleBtn = document.querySelector(".toggle-btn");
const linkList = document.querySelector(".link-list");
const navbar = document.querySelector(".navbar")

let temp;

toggleBtn.addEventListener("click",function(){
    if(linkList.classList.contains("show-list"))
    {
        linkList.classList.remove("show-list");
    }
    else    
    {
        linkList.classList.add("show-list");
    }
})