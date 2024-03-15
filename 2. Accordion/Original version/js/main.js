const foodList = document.querySelector(".FoodList")

function changeHeight(foodInformation){
  const foodContentContainer = foodInformation.querySelector(".content-container");
  const foodContent = foodContentContainer.querySelector(".content");
  const foodContentHeight = foodContent.getBoundingClientRect().height;

  foodContentContainer.style.height = foodInformation.classList.contains("mOpen") ? `${foodContentHeight}px` : 0
}

foodList.addEventListener("click", (e) => {
  if (!e.target.matches(".FoodInformation > .header")) return;
  const foodInformation = e.target.parentElement;
  foodInformation.classList.toggle("mOpen");
  changeHeight(foodInformation)
})


document.addEventListener('keydown', (e) => {
  const key = e.key.toLowerCase();
  console.log(document.activeElement, key)
  if (key === 'escape'){
    const foodInformation = document.activeElement.closest('.FoodInformation');
    if (foodInformation.classList.contains('mOpen')){
      foodInformation.classList.remove('mOpen')
      changeHeight(foodInformation)
    }
    else {
      const FoodsInformation = [...foodList.querySelectorAll('.FoodInformation')]
      FoodsInformation.forEach(foodInformation => {
        foodInformation.classList.remove('mOpen')
        changeHeight(foodInformation)
      })
    }  
  }
  if (key === 'arrowdown' || key === 'arrowup'){
    const foodsInformation = [...foodList.querySelectorAll('.FoodInformation')]
    const activeFoodInformation = document.activeElement.closest('.FoodInformation');
    const activeFoodPosition = foodsInformation.indexOf(activeFoodInformation)

    if (key === 'arrowdown' && activeFoodPosition < foodsInformation.length){
      foodsInformation[activeFoodPosition+1].querySelector('.header').focus()
    }
    else if (key === 'arrowup' && activeFoodPosition > 0){
      foodsInformation[activeFoodPosition-1].querySelector('.header').focus()
    }
  }
})