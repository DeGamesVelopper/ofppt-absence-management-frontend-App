//grab elements from DOM 


const ADD__NAVBAR__EVENTS = () => {
  /*===== SHOW or Hide NAVBAR =====*/
  const header = document.getElementById('header')
  const nav_bar = document.getElementById('nav-bar')
  const menuIcon = document.getElementById('menuIcon')
  const nav__logo = document.getElementById('nav__logo')
  const app = document.getElementById('app')

  const nav__logoIcon = document.getElementById('nav__logoIcon')
  if (menuIcon) {
    menuIcon.addEventListener('click', () => {
      header.classList.toggle('menuIcon__toggled')
      nav_bar.classList.toggle('show')
      nav__logo.classList.toggle('nav__logo__toggle')
      nav__logoIcon.classList.toggle('nav__logoIcon__toggle')
      app.classList.toggle('app__menu__toggled')
    })
  }

  /*===== LINK ACTIVE  =====*/
  const nav__link = document.querySelectorAll('.nav__link')
  const nav__Icon = document.querySelectorAll('.nav__Icon')
  const nav__name = document.querySelectorAll('.nav__name')

  if (nav__link) {
    nav__link.forEach(l => l.addEventListener('click', function () {
      if (nav__link) {
        // remove active from nav__logo
        nav__logo.classList.remove('nav__logo__active')
        // remove active from all nav__links and add it to this
        nav__link.forEach(l => l.children[0].classList.remove('nav__Icon__active'))
        // remove active from all nav__Icons and add it to this.nav__icon
        nav__Icon.forEach(l => l.classList.remove('nav__active'))
        this.children[0].classList.add('nav__active')
        this.children[0].classList.add('nav__Icon__active')
        // remove active from all nav__names and add it to this.nav__name
        nav__name.forEach(l => l.classList.remove('nav__Icon__active'))
        this.children[1].classList.add('nav__Icon__active')
      }
    }))
  }

  if (nav__logo) {
    nav__logo.addEventListener('click', function () {
      nav__link.forEach(l => l.classList.remove('nav__Icon__active'))
      nav__Icon.forEach(l => l.classList.remove('nav__Icon__active'))
      nav__Icon.forEach(l => l.classList.remove('nav__active'))
      nav__name.forEach(l => l.classList.remove('nav__Icon__active'))
      this.classList.add('nav__logo__active')
    })
  }
}

const CLEAN__NAVBAR__EVENTS = () => {
  /*===== SHOW or Hide NAVBAR =====*/
  const menuIcon = document.getElementById('menuIcon')
  const nav__link = document.querySelectorAll('.nav__link')
  const nav__logo = document.getElementById('nav__logo')

  if (menuIcon)
    menuIcon.removeEventListener('click', function () {

    })
  if (nav__link)
    nav__link.forEach(l => l.removeEventListener('click', function () {

    }))
  if (nav__logo)
    nav__logo.removeEventListener('click', function () {

    })
}

const REMOVE_APP_PADDING = () => {
  const app = document.getElementById('app')
  app.classList.remove('app__menu__toggled')
}

export {
  ADD__NAVBAR__EVENTS,
  CLEAN__NAVBAR__EVENTS,
  REMOVE_APP_PADDING
}