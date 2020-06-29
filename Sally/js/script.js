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


const navigator = (i) => {
    console.log("click click")
            gsap.to(`#day-3`, .5,{attr:{transform: paths[i].rect_position}})
            gsap.to(`#PATH_1-3`, 1,{attr:{
                d: paths[i].line_path,
                transform: paths[i].line_transform
            }})
            gsap.from(`#Path_6-2`, 1,{ opacity:0, y: -10, x: 0, y: 0,} )
            gsap.to(`#Path_6-2`, 1,{ ease: "power3.out",
                    attr:{
                        d: paths[i].shadow_path,
                        transform: paths[i].shadow_transform
                    }})
            gsap.to(`#linear-gradient`, 1.5,{
                attr:{
                    x1: paths[i].circle_path[0], 
                    y1: paths[i].circle_path[1], 
                    x2: paths[i].circle_path[2], 
                    y2: paths[i].circle_path[3]
                }})
            gsap.to(`#cursor_group`, 1,{attr:{transform: paths[i].cursor_path}})

            gsap.to(title,1,{
               text: {
                    value: paths[i].title,
                    delimiter: " "
                }
            })
            gsap.to(hero_text,1,{
                text: {
                    value: paths[i].text,
                    delimiter: " "
                }
            })

                gsap.to(`#${changers[i].id}`,.75,{className:`+=active r${i+1}`})
            for(let j = 0; i < changers.length; j++){
                if(changers[j] != changers[i]){
                    gsap.to(`#${changers[j].id}`,.75,{className:`+=not_active r${j+1}`})
                }
            }
}

//large screen navigator
    for(let i = 0; i < changers.length; i++) {
        let changer = changers[i]
        changer.onclick  = () => {
            changers[i].setAttribute("ok", "1")
            for(item of changers){
                if(item != changers[i]){
                    item.setAttribute("ok", "0")
                }
            }
            navigator(i)

        }
    }

    //small screen menu bar
    const tween = gsap.from(".mobile", 0.5, {
        opacity: 0,
        height: 0,
        width: 0,
        paused: true,
        reversed: true
    });
    
    document.querySelector("#menu").addEventListener("click", hamBurger);
    document.querySelector(".toggle").addEventListener("click", hamBurger);
    
    function hamBurger() {
        tween.reversed() ? tween.play() : tween.reverse();
    }