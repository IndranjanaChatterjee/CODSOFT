var typed = new Typed("#element", {
  strings: [
    "Web developer",
    "Competitive Coder",
    "Coding Enthusiast",
    "Problem Solver",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
window.addEventListener("scroll", () => {
  let h = document.querySelector("nav");
  console.log(h);
  h.classList.toggle("scrolldwn", window.scrollY > 0);
});
const open = document.querySelector(".main i");
const close = document.querySelector(".close i");
const menu = document.querySelector("ul");
open.addEventListener("click", () => {
  menu.style.display = "flex";
  menu.style.top = "0";
});
close.addEventListener("click", () => {
  menu.style.top = "-100%";
});
var typed = new Typed("#cv", {
  strings: [
    "Welcome to my digital resume! Here, you'll find a comprehensive overview of my professional journey, skills, and accomplishments. Through this document, I aim to provide you with a detailed insight into my background, experience, and expertise. Feel free to browse through my career story, and don't hesitate to get in touch if you'd like to discuss potential collaborations or opportunities",
  ],
  typeSpeed: 10,
  backSpeed: 10,
  backDelay: 1000,
  loop: true,
});

const more = document.getElementById("more");
const see = document.getElementById("see");
more.addEventListener("click", () => {
  if (more.innerText == "Click for More") {
    see.style.display = "block";
    more.innerText = "Click for less";
  }
  else if (more.innerText == "Click for less") {
    see.style.display = "none";
    more.innerText = "Click for More";
  }
});
function sendemail()
{
Email.send({
  Host : "smtp.gmail.com",
  Username : "indranjanachatterjee@gmail.com",
  Password : "2B0B26CD004356A676BA6053185DB22B6A07",
  To : 'indranjanachatterjee@gmail.com',
  From :document.getElementById("em").value ,
  
  Subject :document.getElementById("sub").value,

  Body :document.getElementById("msg").value
}).then(
message => alert(message)
);
}