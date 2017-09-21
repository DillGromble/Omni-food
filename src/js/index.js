/* global smoothScroll */


// scroll events
// handles sticky nav toggling after scrolling past splash

const nav = document.getElementsByTagName('nav')[0]

window.onscroll = () => {
  nav.className = setNavClass()
}

const setNavClass = () =>
  window.pageYOffset > window.innerHeight - 60
    ? 'sticky-nav'
    : ''




// On click for splash buttons
const hungry = document.getElementById('js--scroll-to-plans')
const showMore = document.getElementById('js--scroll-to-start')

hungry.onclick = () => smoothScroll.scrollTo('plans', 2000)
showMore.onclick = () => smoothScroll.scrollTo('features', 1000)


//set up smooth scroll for nav-bar hash links
const navBarLinks = document.getElementsByClassName('main-nav')[0].children

for (let i = 0; i < navBarLinks.length; i++) {
  const currentLink = navBarLinks[i].childNodes[0]
  let section = currentLink.hash.slice(1)
  currentLink.onclick = () => smoothScroll.scrollTo(section, 1000)
}

