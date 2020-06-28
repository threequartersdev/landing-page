import './scss/app.scss';

import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(CSSRulePlugin, ScrollToPlugin, ScrollTrigger);

const overview = document.querySelector('.overview');
overview.addEventListener('click', () => {
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: '#overview' },
  });
});

const specs = document.querySelector('.specs');
specs.addEventListener('click', () => {
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: '#specs' },
  });
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: '#product',
      start: 'center center',
      end: 'bottom top',
      scrub: 0.5,
      markers: false,
      pin: true,
    },
  })
  .to('.text', { scale: 0 })
  .from('.box1', { xPercent: -200 })
  .from('.box2', { opacity: 0 })
  .from('.box3', { opacity: 0 })
  .from('.first', { opacity: 0 })
  .from('.box4', { opacity: 0 })
  .from('.second', { opacity: 0 })
  .from('.box5', { opacity: 0 })
  .from('.third', { opacity: 0 });
