// promesa que devuelve el doble después de 2 segundos
function esperar(numero) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(numero * 2);
    }, 2000);
  });
}

// función async/await
async function calcular() {
  let numero = document.getElementById("numero").value;
  let resultadoTexto = document.getElementById("resultado");

  if (numero === "") {
    resultadoTexto.textContent = "Por favor ingresa un número";
    return;
  }

  resultadoTexto.textContent = "Calculando...";

  let resultado = await esperar(Number(numero));

  resultadoTexto.textContent = "El doble es: " + resultado;
}
