const arrow = document.querySelector(".arrow");
const aboutMe = document.querySelector(".about-me");
const projects = document.querySelector(".projects");


arrow.addEventListener('click', e=> {
  window.scrollTo({
    top:960,  
    behavior:"smooth",  
    
  });

})

aboutMe.addEventListener('click', e=> {
  window.scrollTo({
    top:1960,  
    behavior:"smooth",  
    
  });

})

projects.addEventListener('click', e=> {
  window.scrollTo({
    top:2860,  
    behavior:"smooth",  
    
  });

})




// function on() {
//   document.querySelector(".overlay").style.display = "block";
// }

// function off() {
//   document.querySelector(".overlay").style.display = "none";
// }
