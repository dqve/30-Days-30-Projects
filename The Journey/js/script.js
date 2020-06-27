if (window.matchMedia("(min-width: 769px)").matches) {
    TweenMax.to('.left', 2, {
      delay: .8,
      width: '65%',
      ease: Power2.easeInOut
    })

    TweenMax.to('.left', 2, {
    delay: .8,
    width: '65%',
    ease: Power2.easeInOut
  })
  }

  if (window.matchMedia("(max-width: 770px)").matches) {
    TweenMax.to('.left', 2, {
      delay: .8,
      width: '100%',
      ease: Power2.easeInOut
    })
  }

  TweenMax.to('.right', 2, {
    delay: .6,
    width: '35%',
    ease: Power3.easeInOut
  })
/*
  TweenMax.from('.nav', 2, {
    delay: .8,
    opacity: 0,
    ease: Expo.easeInOut
  })

  TweenMax.from('.text h1', 2, {
    delay: .6,
    x: 1000,
    ease: Circ.easeInOut
  })

  TweenMax.from('.text p', 2, {
    delay: .7,
    x: 1000,
    ease: Circ.easeInOut
  })

  TweenMax.to('.desert', 1, {
    delay: 2.75,
    width: '375px',
    ease: Power2.easeInOut
  })

  TweenMax.staggerFrom('.bottomnav ul li', 2, {
    delay: 1,
    x: 1000,
    ease: Circ.easeInOut
  }, 0.08)

  TweenMax.from('.info', 2, {
    delay: 1.5,
    y: 100,
    ease: Circ.easeInOut
  })

  TweenMax.from('.name', 2, {
    delay: 1.5,
    x: -600,
    ease: Circ.easeInOut
  })
  */