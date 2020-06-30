/*
*
* Made By David Ayo
* To be continued ...
*
*/

//text slider registration
gsap.registerPlugin(TextPlugin);

//get elements
const changers = document.querySelectorAll(".changer hr")
const title = document.querySelector(".hero-content h1")
const hero_text = document.querySelector(".hero-content p")
const left = document.querySelector("#left")
const right = document.querySelector("#right")

//loading animation
//logo : nav : hero&social : phone <> changer="one by one" <> chat
gsap.from(`#lv`, 2,{ opacity:0, x: -70} )
gsap.from(`#rv`, 2.5,{ opacity:0, x: 70} )
gsap.from(`.background`, 2,{ opacity:0, x: 70} )
gsap.from(`.phone`, 1.75,{ opacity:0, delay: .5, ease: "power3.out"} )
gsap.from(`.socials`, 1.75,{ opacity:0, delay: .5, ease: "power3.out"} )
gsap.from(`.changer`, 1.5,{ opacity:0, delay: 0.75,  y: -20, ease: "power3.out"} )

    //small screen menu bar
    const tween = gsap.from(".mobile", 0.5, {
        opacity: 0,
        height: 0,
        width: 0,
        paused: true,
        reversed: true
    });

    TweenMax.from('.hero-content h1, .status', 1.7, {
        delay: .01,
        opacity: 0,
        y: 500,
        ease: Circ.easeInOut
      })
    
      TweenMax.from('.hero-content p, .buttons', 1.75, {
        delay: .09,
        opacity: 0,
        y: 550,
        ease: Circ.easeInOut
      })

          
    document.querySelector("#menu").addEventListener("click", hamBurger);
    document.querySelector(".toggle").addEventListener("click", hamBurger);
    
    function hamBurger() {
        tween.reversed() ? tween.play() : tween.reverse();
    }