const main = document.querySelector('main')
const toggleMenuButton = document.querySelector('.toggle-menu-button')
const offCanvasMenu = document.querySelector('.off-canvas-menu')


function getAnchorElements(element) {
  anchorsArray = [...element.querySelectorAll('a')]
  return anchorsArray
}

toggleMenuButton.addEventListener('click', _ => {
  main.classList.toggle('--off-canvas-menu-visible')
  offCanvasMenu.classList.toggle('--visible')
  if (offCanvasMenu.classList.contains('--visible'))
    offCanvasMenu.focus()
  else
    main.focus()
})

offCanvasMenu.addEventListener('keydown', (e) => {
  const key = e.key.toLowerCase()
  if ((key === 'escape') && (offCanvasMenu.classList.contains('--visible'))) {
    offCanvasMenu.classList.toggle('--visible')
    main.classList.toggle('--off-canvas-menu-visible')
    main.focus()
    return
  }
  if (key === 'tab' && screen.width <= 480) {
    const anchorsArray = [...offCanvasMenu.querySelectorAll('a')]
    const lastAnchor = anchorsArray.slice(-1)[0]
    const firstAnchor = anchorsArray[0]
    if (e.target === lastAnchor) {
      firstAnchor.focus()
      e.preventDefault()
    }
  }
})

document.addEventListener('focusin', (e) => {
  console.log(e.target)
})
