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
gsap.from(`#lv`, 1,{ opacity:0, x: -70} )
gsap.from(`#rv`, 1.5,{ opacity:0, x: 70} )
gsap.from(`.hero-content`, 1,{ opacity:0, x: -70} )
gsap.from(`.phone`, 1,{ opacity:0, delay: .5, ease: "power3.out"} )
for(changer of changers){
    gsap.from(`#${changer.id}`, 1,{ opacity:0, delay: 1.05,  y: -20, ease: "power3.out"} )
}
gsap.from(`.chat`, 1,{ opacity:0, delay: 1.25,  y: 20, ease: "power3.out"} )


    //small screen menu bar
    const tween = gsap.from(".mobile", 0.5, {
        opacity: 0,
        height: 0,
        width: 10,
        paused: true,
        reversed: true
    });
    
    document.querySelector("#menu").addEventListener("click", hamBurger);
    document.querySelector(".toggle").addEventListener("click", hamBurger);
    
    function hamBurger() {
        tween.reversed() ? tween.play() : tween.reverse();
    }