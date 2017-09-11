/* global smoothScroll */


// handles sticky nav toggling after scrolling past splash

const nav = document.getElementsByTagName('nav')[0]
window.onscroll = () => {
  nav.className = window.pageYOffset > window.innerHeight - 60
    ? 'sticky-nav'
    : ''
}


// On click for splash buttons
const hungry = document.getElementById('js--scroll-to-plans')
const showMore = document.getElementById('js--scroll-to-start')

hungry.onclick = () => smoothScroll.scrollTo('section-plans')
showMore.onclick = () => smoothScroll.scrollTo('section-features')
