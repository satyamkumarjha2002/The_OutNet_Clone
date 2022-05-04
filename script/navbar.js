import {
    navbar
} from "../components/navbar.js";
document.querySelector("#navbar-start").innerHTML = navbar();
import {
    navbar_function
} from "../components/navbar_function.js";
setTimeout(() => {
    navbar_function()
}, 1000);
let s_search = document.querySelector("#s_search");
s_search.addEventListener("click", search_fun);

function search_fun() {
    let serach_box = document.querySelector("#s-search-box");
    serach_box.style.display = "block";
}
let cut=document.querySelector("#s-cut");
cut.addEventListener("click",cutthebox);
function cutthebox(){
    let serach_box = document.querySelector("#s-search-box");
    serach_box.style.display="none";
}
let query=document.querySelector("#s-query");
query.addEventListener("input",debaunce);
function user_input(){
    let value=query.value;
    console.log(value);
}
function main(){
    user_input();
}
let id;
function debaunce(){
    clearTimeout(id);
    id=setTimeout(() => {
        main();
    },1000);
}