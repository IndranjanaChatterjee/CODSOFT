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