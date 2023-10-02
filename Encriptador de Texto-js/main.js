/* 
Descripción:
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"

   Requisitos:
    Debe funcionar solo con letras minúsculas
    No deben ser utilizados letras con acentos ni caracteres especiales
    Debe ser posible convertir una palabra para la versión encriptada también devolver una 
    palabra encriptada para su versión original. 
*/

const textEncriptar = document.querySelector(".text_encriptar");
const textDesencriptar = document.querySelector(".text_desencriptar");
const btnLimpiar = document.querySelector(".btn_limpiar");
const btnCopiar = document.querySelector(".btn_copiar");

/*------------Funcion encriptar----------------*/
function encriptar (){
    let texto = document.querySelector(".text_encriptar").value;
    let encriptar = texto.replace(/e/gi, "enter")
                            .replace(/i/gi, "imes")
                            .replace(/a/gi, "ai")
                            .replace(/o/gi, "ober")
                            .replace(/u/gi, "ufat");
    document.querySelector(".text_desencriptar").value = encriptar;
    document.querySelector(".text_encriptar").value;
    }


/*------------Funcion Desencriptar----------------*/
 function desencriptar (){
        let texto = document.querySelector(".text_encriptar").value;
        let desencriptar = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
        document.querySelector(".text_desencriptar").value = desencriptar;
        document.querySelector(".text_encriptar").value;
}


/*------------Borrar texto----------------*/
  function limpiar() {
      document.querySelector(".text_encriptar").value = "";
  }

  /*------------Copiar texto----------------*/
  function copiar() {
    let contenido = document.querySelector(".text_desencriptar");
    contenido.select();
    document.execCommand("copiar");
    alert("Texto copiado 😊");
}
