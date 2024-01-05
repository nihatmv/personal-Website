const arrow = document.querySelector(".arrow");

arrow.addEventListener('click', e=> {
  window.scrollTo({
    top:900,  
    behavior:"smooth",  
    
  });

})


function on() {
  document.querySelector(".overlay").style.display = "block";
}

function off() {
  document.querySelector(".overlay").style.display = "none";
}
