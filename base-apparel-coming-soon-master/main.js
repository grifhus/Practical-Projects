const form = document.querySelector(".container__content__form")
const inputEmail = document.querySelector(".container__content__form__email")
const error = document.querySelector(".container__content__email--error")

// escuchamos el submit del formulario
form.addEventListener("submit", (event) => {
  // previene el evento predeterminado del formulario que es recargar la pagina
  //   event.preventDefault()
  const regExp =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

  if (regExp.test(inputEmail.value)) {
    inputEmail.style.border = "1px solid hsl(0, 36%, 70%)"
    inputEmail.style.backgroundImage = 'url("")'
    error.innerHTML = ""
  } else {
    event.preventDefault()
    inputEmail.style.border = "1px solid red"
    inputEmail.style.backgroundImage = 'url("./images/icon-error.svg")'
    error.innerHTML = "Please provide a valid email"
  }
})
