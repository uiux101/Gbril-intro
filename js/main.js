
let body = document.querySelector("body");
for (let i = 0; i < 50; i++) {
  let star = document.createElement("span");
  star.setAttribute("class", "star");
  let posX = Math.floor(Math.random() * 90) + "%";
  let posY = Math.floor(Math.random() * 90) + "%";
  star.style = `top:${posX};left:${posY}`;
  body.append(star);
}

gsap.to(".star", {
    opacity: .1,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "linear"
  });
  






  let screenWidth = window.innerWidth + "px";
  let negativesSreenWidth ="-" + window.innerWidth + "px";

//   clouds

gsap.set(".cloud-3",{bottom:"30%",immediateRender:true})
gsap.set(".cloud-2",{left:"30%",immediateRender:true})

gsap.fromTo(".cloud-1",{
left:screenWidth,
},{   
    left:negativesSreenWidth,
    duration:400,
    repeat:-1,
    ease:Power0,
    delay:10
     
})

gsap.to(".cloud-2",{
    left:negativesSreenWidth,
    duration:300,
    yoyo:true,
    repeat:-1,
    ease:Power0,
})

gsap.fromTo(".cloud-3",{
    left:screenWidth,
    },{
        left:negativesSreenWidth,
        duration:400,
        repeat:-1,
        ease:Power0,
        
    })

// title

let tl = gsap.timeline();

    tl.from(".title",{
        opacity:0,
        y:"200px",
        ease:"power4.inOut",
        duration:3
      },"<")

    tl.from(".desc",{
        opacity:0,
        x:50,
        delay:1,
        ease:"power4.inOut",
        duration:2
      },"<")
