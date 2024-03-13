const main = document.querySelector('main')
const toggleMenuButton = document.querySelector('.toggle-menu-button')
const offCanvasMenu = document.querySelector('.off-canvas-menu')

toggleMenuButton.addEventListener('click', _ => {
  main.classList.toggle('--off-canvas-menu-visible')
  offCanvasMenu.classList.toggle('--visible')
})
