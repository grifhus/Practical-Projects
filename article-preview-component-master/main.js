const profile = document.querySelector(".card__content__profile")
const shareIcons = document.querySelector(".card__content__share-icons")
const shareBtn = document.querySelector(".card__content__button")
// escuchamos el shareBtn-  al realizar click realiza el toggle
shareBtn.addEventListener("click", () => {
  console.log("click")
  // toggle quita o agrega en este caso una clase
  profile.classList.toggle("hidden")
  shareIcons.classList.toggle("show")
  shareBtn.classList.toggle("rotate")
})
