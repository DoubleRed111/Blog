import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const fadeInUp = (element: Element, delay = 0) => {
  gsap.from(element, {
    y: 50,
    opacity: 0,
    duration: 1,
    delay,
    ease: 'power3.out'
  })
}

export const staggerFadeIn = (elements: Element[], stagger = 0.1) => {
  gsap.from(elements, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: elements[0],
      start: 'top 80%'
    }
  })
}

export const parallaxScroll = (element: Element) => {
  gsap.to(element, {
    y: 100,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  })
}

export const textReveal = (element: Element) => {
  gsap.from(element, {
    opacity: 0,
    y: '100%',
    duration: 1.2,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%'
    }
  })
}

export const scaleIn = (element: Element) => {
  gsap.from(element, {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%'
    }
  })
} 