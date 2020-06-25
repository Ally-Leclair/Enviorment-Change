var CO2 = document.getElementById("CO2E")
  CO2.addEventListener("click",CO2function)

function CO2function(){
   window.scrollY + document.querySelector('#p1').getBoundingClientRect().top // Y

window.scrollX + document.querySelector('p1').getBoundingClientRect().left // X
}