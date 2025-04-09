const header = document.querySelector("header");

window.addEventListener('scroll', function () {
    header.classList.toggle('sticky', window.scrollY > 80);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("open")
};

window.onscroll = () => {
    menu.classList.remove("bx-x");
    navlist.classList.remove("open");
};

const sr = scrollReveal({
    origin: "top",
    distance: "85px",
    duration: 2500,
    reset: true
});

sr.reveal(".home-text", { delay: 300 });
sr.reveal(".home-img", { delay: 400 });
sr.reveal(".container", { delay: 400 });

sr.reveal(".about-img", {});
sr.reveal(".about-text", { delay: 300 });

sr.reveal(".middle-text", {});
sr.reveal(".row-btn,.shop-content", { delay: 300 });

sr.reveal(".review-content,.contact", { delay: 300 });

document.querySelectorAll('.navlist a').forEach(anchor => {
    anchor.addEventListener('click', function(e){
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      const duration = 1500;
  
      const startPosition = window.pageYOffset;
      const distance = targetSection.offsetTop - startPosition;
      let start = null;
  
      window.requestAnimationFrame(function step(timestamp){
        if(!start) start = timestamp;
        const progress = timestamp - start;
        const scrollPos = easeInOutQuad(progress,startPosition,distance, duration);
        window.scrollTo(0,scrollPos);
        if(progress < duration)window.requestAnimationFrame(step);
      });
      function easeInOutQuad(t, b, c, d){
        t /= d /2;
        if(t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }
  
      targetSection.scrollIntoView({behaviour: 'smooth'});
    })
  });
  