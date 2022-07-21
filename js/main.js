let intro = document.querySelector(".intro");
for (let i = 0; i < 50; i++) {
  let star = document.createElement("span");
  star.setAttribute("class", "star");
  let posX = Math.floor(Math.random() * 90) + "%";
  let posY = Math.floor(Math.random() * 90) + "%";
  star.style = `top:${posX};left:${posY}`;
  intro.append(star);
}

gsap.to(".star", {
  opacity: 0.1,
  duration: 1,
  repeat: -1,
  yoyo: true,
  ease: "linear",
});

//   Clouds

gsap.to(".cloud-1", {
  x: 100,
  duration: 8,
  repeat: -1,
  ease: "none",
  yoyo: true,
});

gsap.to(".cloud-2", {
  x: 100,
  duration: 7,
  repeat: -1,
  ease: "none",
  yoyo: true,
});

gsap.to(".cloud-3", {
  x: 100,
  duration: 10,
  repeat: -1,
  ease: "none",
  yoyo: true,
});

// Title

let tl = gsap.timeline();

gsap.from(".redirect-btn", {
  y: 30,
  repeat: -1,
  yoyo: true,
  ease: "power4.inOut",
  duration: 2,
});

// preloader

window.addEventListener("load", () => {
  gsap.to("#preloader", {
    opacity: 0,
    zIndex: "-1",
    ease: "power4.inOut",
    duration: 1,
  });

  setTimeout(() => {
    document.getElementById("preloader").remove();
  }, 1000);

  tl.from(
    ".title",
    {
      opacity: 0,
      y: "200px",
      ease: "power4.inOut",
      duration: 2,
    },
    "<"
  );
  tl.from(
    ".subtitle",
    {
      opacity: 0,
      y: "100px",
      ease: "power4.inOut",
      duration: 3,
    },
    "<"
  );

  tl.from(
    ".desc",
    {
      opacity: 0,
      y: 50,
      ease: "power4.inOut",
      duration: 2,
    },
    "<.5"
  );
});
