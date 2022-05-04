import { navbar} from "../components/navbar.js";
document.querySelector("#navbar").innerHTML=navbar();
import {navbar_function} from "../components/navbar_function.js";
setTimeout(() => {
    navbar_function()
}, 1000);

function showthediv(id){
  console.log(id)
  if(document.querySelector(`#${id} ul`).style.display==""||document.querySelector(`#${id} ul`).style.display=="none"){
    if(id=="z-size-shoe"||id=="z-size-shirt"||id=="z-size"){
      document.querySelector(`#${id} ul`).style.display="grid"
    }
    else{
      document.querySelector(`#${id} ul`).style.display="block"
    }
    for(let i=0; i<alldiv.length; i++){
      console.log(id,alldiv[i].id)
      if(id!==alldiv[i].id){
       document.querySelector(`#${alldiv[i].id} ul`).style.display="none"  
      }
    }
  }
  else{
 setTimeout(() => {
    document.querySelector(`#${id} ul`).style.display="none"
  }, 2000);
      
   
  }
 

 
  
}
  let alldiv=  document.querySelectorAll("#z-sort-items>div")
 for(let i=0; i<alldiv.length; i++){
   alldiv[i].addEventListener("click", function(){
     showthediv(this.id)
   })
 }


const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 1000;
priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = 0
        maxPrice =3000
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) )*100 + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max)*100  + "%";
            }
        }
    });
});
rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
      let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);
        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            document.querySelector("#z-min").innerText =`$${minVal}`;
            document.querySelector("#z-max").innerText = `$${maxVal}`;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});