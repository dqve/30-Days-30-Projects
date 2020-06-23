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



//slider variables
const paths = [
    {
        id: "day",
        rect_position: "translate(-12.313 -1)",
        line_path: "M162.988,372.67l6.88-3.383,6.842-9.973,6.794-3.959,6.048,3.959,7.074,6.782,7.469,5,3.306,11.337,5.81,36.5,11.65-59.616,12.254,11.78L248.7,379.2l11.652-21.736,13.01-5.09,10.7-10.1,3.029,15.188,2.483,99.085,13.664-85.458,2.514-13.627,7.949,34.762,9.034-14.827,10.188-22.047,8.944,61.155,8.2-37.307,8.263,30.267,10.251-17.241L372.9,377.4l7.327-15.437,8.511,17.239,3.39,10.565,10.025,41.28V382.431l5.23,9.8,5.526,3.148,9.608,2.579,5.99,11.514,3.868,15.911,6.98,10.927",
        line_transform: "translate(92.81 234.65)",
        shadow_path: "M6046.5,392.357l5.68-6.292s4.744-1.5,5.188-3.6a32.548,32.548,0,0,1,2.1-5.522l6.2-4.42,9.972,6.252,11.511,9.008,9.543,46.8,12-57.643,22.9,19.077,12.158-19.077,14.713-7.086,8.75-11.009,6.3,114.859,15.354-96.764,9.44,32.719,8.834-17.307,9.16-22.5,9.285,64.728,8.4-38.566,7.461,31.068,10.9-17.426,4.629-17.307,6.467-13.58L6273.923,398l12.229,48.895V400.256l6.824,9.408,13.069,4.514,6.43,11.086,3.667,18.034,8.308,10.881v75.993H6046.5V392.357",
        shadow_transform: "translate(-5791.3 217.91)",
        circle_path: ["0.235","0.935","0.647","0.411"],
        cursor_path: "translate(181 342)",
        title: "Control All Things Crypto Currency",
        text: "Leverage our rich features, perform easy conversions and manage all your wallets."
    },
    {
        id: "week",
        rect_position: "translate(73.688 -1)",
        line_path: "M162.987,372.67l6.759-3.383,6.722-9.973,6.674-3.959,5.941,3.959,6.95,6.782,7.337,5,3.248,11.337,5.14,7.337,8.733,2.461,12.394,5.727,9.1-2.579,11.252-5.609,9.561-7.337,7.738-1.087,3.513-8.506,8.376,3.709,8.009-7.26,7.458,1.808,4.96,3.92,8.8-10.824,6.9-11.477,5.683-9.175,10.547-7.236,11.457-13.637,4.034-11.914,4.634-4.826,5.542,2.678,8.761,9.786,4.561,17.912,6.82,4.5,7.72,11.917,6.607,11.477,3.03,18.241,5.138,9.8,5.429,3.148,9.439,2.579,5.885,11.514,3.8,15.911,6.857,10.927",
        line_transform: "translate(99.41 259.41)",
        shadow_path: "M161.285,372.67l6.759-3.383,6.722-9.973,6.674-3.959,5.941,3.959,6.95,6.782,7.337,5,3.248,11.337,5.14,7.337,8.733,2.461,12.394,5.727,9.1-2.579,11.252-5.609,9.561-7.337,7.738-1.087,3.513-8.506,8.376,3.709,8.009-7.26,7.458,1.808,4.96,3.92,8.8-10.824,6.9-11.477,5.683-9.175,10.547-7.236,11.457-13.637,4.034-11.914,4.634-4.826,5.542,2.678,8.761,9.786,4.561,17.912,6.82,4.5,7.72,11.917,6.607,11.477,3.03,18.241,5.138,9.8,5.429,3.148,9.439,2.579,5.885,11.514,3.667,8.415s4.032,11.006,5.78,15.612c.486,1.28.145,8.552.569,9.67.08.212-270.663.006-270.864,0-1.344.035,0-70.329,0-70.329",
        shadow_transform: "translate(101.12 259.41)",
        circle_path: ["0.794","0.879","0.426","0.358"],
        cursor_path: "translate(237.609 317.757)",
        title: "Countless crypto options",
        text: "We provide Bitcoin and Etherum currencies as well as our very own butter coins etc."
    },
    {
        id: "month",
        rect_position: "translate(164.688 -1)",
        line_path: "M166.137,504.447l6.759-3.383,11.893-91.771,9.453-18.19,5.548-3.119,3.581-16.888,3.248,11.337,10.111-7.417,5.955,6.329,8.891,4.642,9.337-4.642-1.489,30.647,9.337-10.971,8.446-13.528,10.768,10.465,6.072-25.119,8.864,13.148,7.522-16.7,7.458,1.808-2.074,48.383,11.632-7.487,4.419-20.889,10.941,18.19,9.054-21.8,10.547-7.236,11.457-13.637,4.034-11.914,9.761-10.943L379.67,377.54l11.084-12.971,7.191,17.862,5.138,9.8,5.429,3.148,9.439,2.579,5.885,11.514,3.8,15.911,6.857,10.927",
        line_transform: "translate(90.41 211.41)",
        shadow_path: "M6922.247,541.983V521.29l6.426-3.127,12.5-93.1,9.918-17.811,4.126-2.224,4.309-16.674,3.323,10.245,10.14-7,6.334,7,8.669,4.247,8.168-4.247-.964,30.309,10.677-11.747,7.6-12.133,10.577,9.457,6.034-25.193,8.655,13.553,8.431-16.927,7.045,2.019-2.231,48.31,11.438-7.339,4.655-21.123,10.945,18.195,8.833-21.558,10.462-7.341,12.259-13.892,3.387-11.887,9.347-9.562,6.178,14.291,6.292,18.244,11.5-13.181,12.113,28.07,5.032,2.973,10.012,2.585,5.588,12.18,3.793,15.7,6.8,10.765v88.613Z",
        shadow_transform: "translate(-6669.69 194.67)",
        circle_path: ["0.887","0.201","0.441","0.549"],
        cursor_path: "translate(238.409 317.757)",
        title: "Fast and Easy",
        text: "Easy matching and fast transactions are the experiences enjoyed by our users."
    },
    {
        id: "year",
        rect_position: "translate(262.688 -1)",
        line_path: "M160.741,447.85l10.526,14.891,10.144,23.306,8.895-18.19,8.59,26.051,8.674-47.866,3.9,5.727,7.261,17.215,8.668-83,9.591,47.575,6.58-32.541,7.635,32.541,6.03-10.371,8.043-8.292,6.671,10.723,6.788-18.547,9.112,12.4,10.946-7.487,19.985-47.051,10.657,52.213,6.9-12.494,15.315,49.9,4.849-12.688L367,425.382l16.94,26.529,9.943-22.295,4.329-12.463,5.248-10.079,8.417,18.308,6.452,10.927",
        line_transform: "translate(84.45 219.08)",
        shadow_path: "M7352.851,543.5V464.4l11.2,15.619,9.8,23.067,9.052-20.012,8.516,29.085,8.416-50.264,4.028,7.645,7.449,17.961,8.416-84.894,9.93,47.207s6.119-36.667,6.343-31.891,6.895,31.891,6.895,31.891l6.333-10.318,7.864-7.632,6.854,10.149,6.9-19.028,9.521,13.62,9.887-7.628,19.861-46.4,11.287,49.286,6.517-8.879,15.706,49.36,4.692-12.957,10.336-17.375,17.573,27.527,10.706-24.979,2.248-10.42,5.954-11.155,9.925,21.576,5.374,9.438v89.5Z",
        shadow_transform: "translate(-7107.66 202.34)",
        circle_path: ["0.15","0.209","0.644","0.559"],
        cursor_path: "translate(185.648 334.002)",
        title: "Invest in coins",
        text: "Use our 'cryptocomb' as a crypto currency bank. Opening an account allows you to invest directly in crypto."
    },
    {
        id: "day",
        rect_position: "translate(-12.313 -1)",
        line_path: "M162.988,372.67l6.88-3.383,6.842-9.973,6.794-3.959,6.048,3.959,7.074,6.782,7.469,5,3.306,11.337,5.81,36.5,11.65-59.616,12.254,11.78L248.7,379.2l11.652-21.736,13.01-5.09,10.7-10.1,3.029,15.188,2.483,99.085,13.664-85.458,2.514-13.627,7.949,34.762,9.034-14.827,10.188-22.047,8.944,61.155,8.2-37.307,8.263,30.267,10.251-17.241L372.9,377.4l7.327-15.437,8.511,17.239,3.39,10.565,10.025,41.28V382.431l5.23,9.8,5.526,3.148,9.608,2.579,5.99,11.514,3.868,15.911,6.98,10.927",
        line_transform: "translate(92.81 234.65)",
        shadow_path: "M6046.5,392.357l5.68-6.292s4.744-1.5,5.188-3.6a32.548,32.548,0,0,1,2.1-5.522l6.2-4.42,9.972,6.252,11.511,9.008,9.543,46.8,12-57.643,22.9,19.077,12.158-19.077,14.713-7.086,8.75-11.009,6.3,114.859,15.354-96.764,9.44,32.719,8.834-17.307,9.16-22.5,9.285,64.728,8.4-38.566,7.461,31.068,10.9-17.426,4.629-17.307,6.467-13.58L6273.923,398l12.229,48.895V400.256l6.824,9.408,13.069,4.514,6.43,11.086,3.667,18.034,8.308,10.881v75.993H6046.5V392.357",
        shadow_transform: "translate(-5791.3 217.91)",
        circle_path: ["0.235","0.935","0.647","0.411"],
        cursor_path: "translate(181 342)",
        title: "Control All Things Crypto Currency",
        text: "Leverage our rich features, perform easy conversions and manage all your wallets."
    },
    {
        id: "week",
        rect_position: "translate(73.688 -1)",
        line_path: "M162.987,372.67l6.759-3.383,6.722-9.973,6.674-3.959,5.941,3.959,6.95,6.782,7.337,5,3.248,11.337,5.14,7.337,8.733,2.461,12.394,5.727,9.1-2.579,11.252-5.609,9.561-7.337,7.738-1.087,3.513-8.506,8.376,3.709,8.009-7.26,7.458,1.808,4.96,3.92,8.8-10.824,6.9-11.477,5.683-9.175,10.547-7.236,11.457-13.637,4.034-11.914,4.634-4.826,5.542,2.678,8.761,9.786,4.561,17.912,6.82,4.5,7.72,11.917,6.607,11.477,3.03,18.241,5.138,9.8,5.429,3.148,9.439,2.579,5.885,11.514,3.8,15.911,6.857,10.927",
        line_transform: "translate(99.41 259.41)",
        shadow_path: "M161.285,372.67l6.759-3.383,6.722-9.973,6.674-3.959,5.941,3.959,6.95,6.782,7.337,5,3.248,11.337,5.14,7.337,8.733,2.461,12.394,5.727,9.1-2.579,11.252-5.609,9.561-7.337,7.738-1.087,3.513-8.506,8.376,3.709,8.009-7.26,7.458,1.808,4.96,3.92,8.8-10.824,6.9-11.477,5.683-9.175,10.547-7.236,11.457-13.637,4.034-11.914,4.634-4.826,5.542,2.678,8.761,9.786,4.561,17.912,6.82,4.5,7.72,11.917,6.607,11.477,3.03,18.241,5.138,9.8,5.429,3.148,9.439,2.579,5.885,11.514,3.667,8.415s4.032,11.006,5.78,15.612c.486,1.28.145,8.552.569,9.67.08.212-270.663.006-270.864,0-1.344.035,0-70.329,0-70.329",
        shadow_transform: "translate(101.12 259.41)",
        circle_path: ["0.794","0.879","0.426","0.358"],
        cursor_path: "translate(237.609 317.757)",
        title: "Countless crypto options",
        text: "We provide bitcoin and etherum currencies as well as our very own butter coins etc."
    }
]

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

    //small screen left navigator
    left.onclick = () => {
        for(let i = 0; i < changers.length; i++) {
            if(changers[i].getAttribute("ok") == "1"){
                changers[i].setAttribute("ok", "0")
                if(i > 0){
                    changers[i-1].setAttribute("ok", "1")
                    navigator(i-1)
                } else {
                    changers[i+6].setAttribute("ok", "1")
                    navigator(0)
                }
            }
        }
    }

    //small screen right navigator
    right.onclick = () => {
        for(let i = 0; i < changers.length; i++) {
            if(changers[i].getAttribute("ok") == "1"){
                changers[i].setAttribute("ok", "0")
                if(i < changers.length-1){
                    changers[i+1].setAttribute("ok", "1")
                    navigator(i+1)
                } else {
                    changers[0].setAttribute("ok", "1")
                    navigator(0)
                }
            }
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

