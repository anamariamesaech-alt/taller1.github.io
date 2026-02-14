// Función que crea la Promise
function ultimaVocal(cadena) {
  return new Promise((resolve, reject) => {
    if (!cadena || cadena.length === 0) {
      reject("cadena vacía");
      return;
    }

    let ultimo = cadena[cadena.length - 1];
    let vocales = "aeiouAEIOU";

    if (vocales.includes(ultimo)) {
      resolve(ultimo);
    } else {
      reject("el caracter no es una vocal");
    }
  });
}

// Evento del botón
document.getElementById("btnEvaluar").addEventListener("click", () => {
  let texto = document.getElementById("cadena").value;
  let resultado = document.getElementById("resultado");

  ultimaVocal(texto)
    .then(vocal => resultado.textContent = "Termina en: " + vocal)
    .catch(error => resultado.textContent = error);
});

