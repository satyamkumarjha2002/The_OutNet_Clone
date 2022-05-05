let iamge1=document.querySelector("#m-image1");
let image2=document.querySelector("#m-image2");
iamge1.addEventListener("click",go_to_clothing_page);
image2.addEventListener("click",go_to_clothing_page);

function go_to_clothing_page(){
    localStorage.setItem("key","womens");
    window.location.href="clothing.html"
}