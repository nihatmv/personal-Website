const arrow = document.querySelector(".arrow");
const aboutMe = document.querySelector(".about-me");


arrow.addEventListener('click', e=> {
  window.scrollTo({
    top:960,  
    behavior:"smooth",  
    
  });

})

aboutMe.addEventListener('click', e=> {
  window.scrollTo({
    top:1760,  
    behavior:"smooth",  
    
  });

})


// function on() {
//   document.querySelector(".overlay").style.display = "block";
// }

// function off() {
//   document.querySelector(".overlay").style.display = "none";
// }
