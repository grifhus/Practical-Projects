const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje"); 

// Las "llaves" de encriptación que utilizaremos son las siguientes:

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar() {
  // creamos una variable solo para recibir el resultado de la funcion
  const textoEncriptado = encriptar(inputTexto.value);
  // mandamos el resultado de TextoEncriptado a mensaje que es el otro textarea
  mensaje.value = textoEncriptado;
  mensaje.style.backgroundImage = "none"
  inputTexto.value = ""
}
//ENCRIPTAMOS
function encriptar(stringEncriptada) {
  // Se crea una matriz para la encriptación
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  // Como el programa no acepta mayusculas se cambia todo a minusculas
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])){
        stringEncriptada = stringEncriptada.replace(matrizCodigo[i][0],matrizCodigo[i][1])
    }
   
  }
  return stringEncriptada;
}

//DESENCRIPTAMOS

function btnDesencriptar() {
    // creamos una variable solo para recibir el resultado de la funcion
    const textoEncriptado = desencriptar(inputTexto.value);
    // mandamos el resultado de TextoEncriptado a mensaje que es el otro textarea
    mensaje.value = textoEncriptado;
    inputTexto.value = ""
  }

function desencriptar(stringDesencriptada) {
    // Se crea una matriz para la encriptación
    let matrizCodigo = [
      ["e", "enter"],
      ["i", "imes"],
      ["a", "ai"],
      ["o", "ober"],
      ["u", "ufat"],
    ];
    // Como el programa no acepta mayusculas se cambia todo a minusculas
    stringDesencriptada = stringDesencriptada.toLowerCase();
  
    for (let i = 0; i< matrizCodigo.length; i++) {
      if (stringDesencriptada.includes(matrizCodigo[i][1])) {
        stringDesencriptada = stringDesencriptada.replace(
          matrizCodigo[i][1],
          matrizCodigo[i][0])
      }
    }
    return stringDesencriptada;
  }

function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value =""
    alert("Texto Copiado")
}

