  const upNext = document.querySelectorAll(".bottomnav .nav ul li")
  const checker = document.querySelector(".bottomnav .next")

  // Article navigator anim
  for(one of upNext){
    one.onclick = () => {
      if(checker.getAttribute("ok") == "0"){
        TweenMax.to(".bottomnav-img ", .1, {
          ease: Expo.easeInOut,
          className:`+=two`
        })
        TweenMax.to(".bottomnav-img ", .1, {
          ease: Expo.easeInOut,
          className:`-=one`
        })
        TweenMax.to(".img03", .1, {
        ease: Expo.easeInOut,
        "display": "none",
        })
        TweenMax.to(".img02", .1, {
        ease: Expo.easeInOut,
        "display": "block",
        "animation": "image-appear 0.0001s linear forwards",
        "animation-delay": "1s"
        });
        TweenMax.to(".text2", .1, {
        ease: Expo.easeInOut,
        "display": "none",
        })
        TweenMax.to(".text", .1, {
            delay: .1,
            ease: Expo.easeInOut,
            "display": "block",
            })
        TweenMax.from(".text h1 .hidetext", 1, {
            y: "50%",
            ease: Expo.easeInOut
          })
        checker.setAttribute("ok", "1")
      } else{
        TweenMax.to(".bottomnav-img ", .1, {
        ease: Expo.easeInOut,
        className:`-=two`
        });
        TweenMax.to(".bottomnav-img ", .1, {
        ease: Expo.easeInOut,
        className:`+=one`
        });
        TweenMax.to(".img02", .1, {
        ease: Expo.easeInOut,
        "display": "none",
        });
        TweenMax.to(".img03", .1, {
        ease: Expo.easeInOut,
        "display": "block",
        "animation": "image-appear 0.0001s linear forwards",
        "animation-delay": "1s"
        });
        TweenMax.to(".text", .1, {
            ease: Expo.easeInOut,
            "display": "none",
            })
        TweenMax.to(".text2", .1, {
            ease: Expo.easeInOut,
            delay: .1,
            "display": "block",
            })
        TweenMax.from(".text2 h1 .hidetext", 1, {
            y: "50%",
            ease: Expo.easeInOut
            })
        checker.setAttribute("ok", "0")
      }
    }
  }

  TweenMax.to(".bg", 2, {
    width: "100%",
    ease: Expo.easeInOut
  })
  
  // Navigation anim
  TweenMax.from(".navbar", 1.5, {
    delay: 2.5,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
  })

  // Social media anim
  TweenMax.staggerFrom(".social ul li", 1.5, {
    delay: 2.8,
    opacity: 0,
    x: -30,
    ease: Expo.easeInOut
  }, 0.08)

  // Text anim
  TweenMax.from(".text h1 .hidetext", 1.75, {
    delay: 1.75,
    y: "150%",
    ease: Expo.easeInOut
  })

  TweenMax.from(".text p .hidetext", 1.5, {
    delay: 2,
    y: "100%",
    ease: Expo.easeInOut
  })

  // Author description anim
  TweenMax.staggerFrom(".desc ul li", 1.5, {
    delay: 2,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
  }, 0.1)

  TweenMax.from(".desc p", 1.5, {
    delay: 2.3,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
  })

  // "Blog By" Anim
  TweenMax.from(".scrolldown", 1.5, {
    delay: 2.7,
    opacity: 0,
    y: 200,
    ease: Expo.easeInOut
  })

  // Bottom navigator anim
  TweenMax.from(".bottomnav", 1.5, {
    delay: 3.2,
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut
  })

  TweenMax.from(".bottomnav .next", 1.5, {
    delay: 3.5,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
  })