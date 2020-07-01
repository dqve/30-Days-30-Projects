/*
*
* Made By David Ayo
* To be continued ...
*
*/

//loading animation
//logo : nav : hero&social : phone <> changer="one by one" <> chat
gsap.from(`#lv`, 1,{ opacity:0, x: -70} )
gsap.from(`#rv`, 1.5,{ opacity:0, y: -70} )
gsap.from(`#menu`, 1.5,{ opacity:0, x: 70} )
//gsap.from(`.hero-content`, 1,{ opacity:0, x: -70} )
gsap.from(`.phone`, 1,{ opacity:0, delay: .5, ease: "power3.out"} )
gsap.from(`.socials`, 1,{ opacity:0, delay: 1.25,  x: 70, ease: "power3.out"} )
gsap.from(`.side-line`, 1,{ opacity:0, delay: 1.25, ease: "power3.out"} )

gsap.from('.hero-content h1, .status', 1.7, {
    delay: .01,
    opacity: 0,
    y: 500,
    ease: Circ.easeInOut
  })

 gsap.from('.hero-content p, .gs-btn', 1.75, {
    delay: .09,
    opacity: 0,
    y: 550,
    ease: Circ.easeInOut
  })

  gsap.from(`.hero-content`, 1,{ opacity:0, x: -70} )

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