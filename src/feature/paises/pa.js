const baseDatos1 = ['Canada', 'EUA', 'Mexico', 'Ecuador', 'Brazil', 'Argentina', 'Uruguay'];
const baseDatos2 = ['Japón', 'Irán', 'Corea del Sur', 'Alemania', 'Croacia', 'España', 'Inglaterra'];

const resultado = document.getElementById("resultado"); //i love u

function encontrado(pais, base) {
  resultado.textContent = pais + " encontrado en " + base;
  resultado.style.color = "green";
}

function busquedaBaseDatos2(pais, callback) {
  const encontradoPais = baseDatos2.find(p => p.toLowerCase() === pais.toLowerCase());

  if (encontradoPais) {
    callback(encontradoPais, "Base de Datos 2");
  } else {
    resultado.textContent = "Dato no encontrado";
    resultado.style.color = "red";
  }
}

function busquedaBaseDatos1(pais, callbackEncontrado, callbackNoEncontrado) {
  const encontradoPais = baseDatos1.find(p => p.toLowerCase() === pais.toLowerCase());

  if (encontradoPais) {
    callbackEncontrado(encontradoPais, "Base de Datos 1");
  } else {
    callbackNoEncontrado(pais, callbackEncontrado);
  }
}

function buscar() {
  const input = document.getElementById("pais");
  const pais = input.value.trim();

  if (pais === "") {
    resultado.textContent = "Escribe un país";
    resultado.style.color = "orange";
    return;
  }

  busquedaBaseDatos1(pais, encontrado, busquedaBaseDatos2);

  input.value = "";
}
