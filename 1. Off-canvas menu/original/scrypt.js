  const offCanvasMenu = document.querySelector(".off-canvas-menu");
  const main = document.querySelector("main")
  const button = document.querySelector("button");
  const body = document.body

  button.addEventListener("click", () => {
    body.classList.toggle('off-menu__visible')
    if (body.classList.contains('off-menu__visible')){
      offCanvasMenu.focus()
    }
  })

  document.addEventListener('keydown', (e) => {
    const pressedKey = e.key.toLowerCase();
    if (pressedKey === 'escape'){
      body.classList.remove('off-menu__visible')
      button.focus()
    }
  })

  

  
