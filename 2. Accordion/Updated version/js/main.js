const foodList = document.querySelector(".food-list")

function changeHeight(foodInformation){
  const foodContentContainer = foodInformation.querySelector(".content-container");
  const foodContent = foodContentContainer.querySelector(".content");
  const foodContentHeight = foodContent.getBoundingClientRect().height;

  foodContentContainer.style.height = foodInformation.classList.contains("--open") ? `${foodContentHeight}px` : 0
}

foodList.addEventListener("click", (e) => {
  if (!e.target.matches(".food-information > .header")) return;
  const foodInformation = e.target.parentElement;
  foodInformation.classList.toggle("--open");
  changeHeight(foodInformation)
})


document.addEventListener('keydown', (e) => {
  const key = e.key.toLowerCase();
  console.log(document.activeElement, key)
  if (key === 'escape'){
    const foodInformation = document.activeElement.closest('.food-information');
    if (foodInformation.classList.contains('--open')){
      foodInformation.classList.remove('--open')
      changeHeight(foodInformation)
    }
    else {
      const FoodsInformation = [...foodList.querySelectorAll('.food-information')]
      FoodsInformation.forEach(foodInformation => {
        foodInformation.classList.remove('--open')
        changeHeight(foodInformation)
      })
    }  
  }
  if (key === 'arrowdown' || key === 'arrowup'){
    const foodsInformation = [...foodList.querySelectorAll('.food-information')]
    const activeFoodInformation = document.activeElement.closest('.food-information');
    const activeFoodPosition = foodsInformation.indexOf(activeFoodInformation)

    if (key === 'arrowdown' && activeFoodPosition < foodsInformation.length){
      foodsInformation[activeFoodPosition+1].querySelector('.header').focus()
    }
    else if (key === 'arrowup' && activeFoodPosition > 0){
      foodsInformation[activeFoodPosition-1].querySelector('.header').focus()
    }
  }
})