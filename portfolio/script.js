var typed = new Typed("#element", {
  strings: [
    "Web developer","Competitive Coder","Coding Enthusiast","Problem Solver"
  ],
  typeSpeed: 100,
  backSpeed:100,
  backDelay:1000,
  loop:true
});
window.addEventListener("scroll",()=>
{
  let h=document.querySelector("nav");
  console.log(h);
  h.classList.toggle("scrolldwn",window.scrollY>0);
})
const open=document.querySelector(".main i");
const close=document.querySelector(".close i");
const menu=document.querySelector("ul");
open.addEventListener("click",()=>
{
  menu.style.display="flex";
  menu.style.top="0";
})
close.addEventListener("click",()=>
{
  menu.style.top="-100%";
})