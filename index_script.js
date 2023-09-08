

let g = document.getElementsByClassName("nav_icon");

g[0].addEventListener("click", function() {
      let image=document.getElementById("img_setting");
      let second_nav=document.getElementById("second_div_id");

      if (image.src.match("./Images/icons/Menu.jpg")){
        image.src = "./Images/icons/x-mark.png";
        second_nav.style.display="block";
        second_nav.style.position="absolute"
      }
      else{
        image.src = "./Images/icons/Menu.jpg";
        second_nav.style.display="none";
      }
});





const TypingText = document.querySelector(".typed-text");
const AutoTyping = document.querySelector(".TypeCursor");
 
const textArray = ["Empowering Coders to Reach New Heights", "Building a community of coders", "Organizing different workshops and coding contest",
                   "Preparing students for placements","Catering Internship opportunities", "Integrating different skillsets within students"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; 
let textArrayIndex = 0;
let charIndex = 0;
 
function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!AutoTyping.classList.contains("typing")) AutoTyping.classList.add("typing");
    TypingText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    AutoTyping.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}
 
function erase() {
	if (charIndex > 0) {
    if(!AutoTyping.classList.contains("typing")) AutoTyping.classList.add("typing");
    TypingText.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    AutoTyping.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}
 
document.addEventListener("DOMContentLoaded", function() { 
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});