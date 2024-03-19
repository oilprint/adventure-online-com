document.addEventListener('DOMContentLoaded', () => {
  'use strict';

    //Lenis Smooth scroll
    const lenis = new Lenis({
      duration: 1.2
    })

    lenis.on('scroll', (e) => {
      console.log(e)
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

  	const gsapBl = document.querySelector('.about__container').offsetWidth;

    const gsapTrack = document.querySelector('.about__track').offsetWidth;
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
        x: '-1210px'
      });


	//resize window
	const debouncedResize = _.debounce(onWindowResize, 500);
	function onWindowResize() {
		location.reload();
	}
	$(window).on('resize', debouncedResize);
})