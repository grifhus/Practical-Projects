let inputEmail = document.getElementById("email")
//selecciono el elemento que tenga el id email y lo guardo en la variable inputEmail
let button = document.getElementById("button")

button.addEventListener("click", (event) => {
  event.preventDefault()
  validateEmail(inputEmail.value)
})
// Escucha un click en el boton y crea una funcion flecha para guardar el valor de inputEmail
function validateEmail(email) {
  let expReg =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

  if (expReg.test(email) == true) {
    inputEmail.style.border = "1px solid  hsl(223, 87%, 63%);"
    error.style.visibility = "hidden"
    inputEmail.value = ""
  } else {
    inputEmail.style.border = "1px solid red"
    //llamarmos el error sin crear una variable con getelementbyid
    error.style.visibility = "visible"
  }
}
//Expresiones regulares
