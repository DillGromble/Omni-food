/* global smoothScroll */


/*----------------------------SCROLL EVENTS-----------------------------------*/

const nav = document.getElementsByTagName('nav')[0]
const boxes = Array.from(document.getElementsByClassName('box'))
const featuresBoxes = boxes.slice(0, 4)
const cityBoxes = boxes.slice(4)
const planBox = document.getElementById('premium-plan')
const appScreen = document.getElementsByClassName('app-screen')[0]
const appScreenDiv = document.getElementsByClassName('steps-box')[0]


window.onscroll = () => {
  nav.className = setNavClass()
  featuresBoxes.forEach(setFeatureBoxVisibility)
  cityBoxes.forEach(setCityBoxVisibility)
  setPlanPulse()
  setAppScreenAnimation()
}

const setNavClass = () =>
  window.pageYOffset > window.innerHeight - 60
    ? 'sticky-nav'
    : ''

const setFeatureBoxVisibility = (box) => {
  if (window.pageYOffset > window.innerHeight - 150) {
    box.className = 'col span-1-of-4 box appear'
  }
}

const setCityBoxVisibility = (box) => {
  if (box.getBoundingClientRect().top < 500) {
    box.className = 'col span-1-of-4 box appear'
  }
}

const setPlanPulse = () => {
  if (planBox.getBoundingClientRect().top < 350) {
    planBox.className += ' pulse'
  }
}

const setAppScreenAnimation = () => {
  if (appScreenDiv.getBoundingClientRect().top < 350) {
    appScreen.className = 'app-screen rise'
  }
}

/*-----------------------------CLICK EVENTS-----------------------------------*/
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

