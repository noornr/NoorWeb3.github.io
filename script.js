console.log("Welcome to NOOR WEB3");

// Fade in page
window.onload = function () {
    document.body.style.opacity = "1";
};

// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.onclick = function () {
    navMenu.classList.toggle("active");
};

// Back to Top Button
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

};

topBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

// Scroll Animation
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section").forEach(section=>{
    section.classList.add("hidden");
    observer.observe(section);
});
const words = [
  "Blockchain Explorer",
  "Web3 Project Tester",
  "Crypto Researcher",
  "AI Enthusiast"
];

const typing = document.getElementById("typing");

let i = 0;
let j = 0;
let deleting = false;

function type() {
  const word = words[i];

  if (!deleting) {
    typing.textContent = word.substring(0, j++);
    if (j > word.length) {
      deleting = true;
      setTimeout(type, 1500);
      return;
    }
  } else {
    typing.textContent = word.substring(0, j--);
    if (j < 0) {
      deleting = false;
      i = (i + 1) % words.length;
    }
  }

  setTimeout(type, deleting ? 50 : 100);
}

type();
