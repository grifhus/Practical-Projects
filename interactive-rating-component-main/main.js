let numberContainer = document.querySelector(".rating-state__number-container")
let submitBtn = document.querySelector(".rating-state__button")
let ratingState = document.querySelector(".rating-state")
let thankYouState = document.querySelector(".thankyou-state")
let rateNumber = document.querySelector(".thankyou-state__result--number")

numberContainer.addEventListener("click", (event) => {
  var numberSelected = event.target.innerText
  rateNumber.innerText = numberSelected
  if (numberSelected != undefined) {
    submitBtn.addEventListener("click", () => {
      ratingState.style.display = "none"
      thankYouState.style.display = "flex"
    })
  }
})

