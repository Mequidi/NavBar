const toggleBtn = document.querySelector(".toggle-btn");
const linkList = document.querySelector(".link-list");
const navbar = document.querySelector(".navbar")

toggleBtn.addEventListener("click",function(){
    console.log(linkList.classList.contains("show-list"))
    if(linkList.classList.contains("show-list")){
        linkList.classList.remove("show-list");
        console.log(linkList.classList.contains("show-list"))
    }
    else    
    {
        linkList.classList.add("show-list");
        console.log(linkList.classList.contains("show-list"))
    }
})