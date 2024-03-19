document.addEventListener('DOMContentLoaded', () => {
  'use strict';

    //Lenis Smooth scroll
    const lenis = new Lenis({
      duration: 1.2
    })

    lenis.on('scroll', (e) => {
      // console.log(e)
    })
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    //Integration Lenis on GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

	//Create animation ScrollTrigger

  gsap.registerPlugin(ScrollTrigger);

  	const gsapBl = document.querySelector('.about__gsap').offsetWidth;

    // const gsapTrack = document.querySelector('.about__track').offsetWidth;
      


      let gsapTrack;

      if (window.innerWidth < 480) {
          gsapTrack = 1250;
      } else if (window.innerWidth >= 480 && window.innerWidth < 768) {
          gsapTrack = 1480;
      } else if (window.innerWidth >= 768 && window.innerWidth < 1200) {
          gsapTrack = 2160;
      } else {
          gsapTrack = 2440;
      }

      console.log(gsapBl);
      console.log(gsapTrack);
      let scrollSliderTransform = gsapTrack - gsapBl
      console.log(scrollSliderTransform);
    
    gsap.to('.about__track', {
        scrollTrigger: {
          trigger: '.about',
          start: 'center center',
          end: () => '+=' + gsapTrack,
          pin: true,
          scrub: true
        },
        x: '-=' + scrollSliderTransform + 'px'
      });


	//resize window
	const debouncedResize = _.debounce(onWindowResize, 700);
	function onWindowResize() {
		location.reload();
	}
	window.addEventListener('resize', debouncedResize);
})
