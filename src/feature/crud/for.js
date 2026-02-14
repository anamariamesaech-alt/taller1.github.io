let datos = JSON.parse(localStorage.getItem("personas")) || [];
let editIndex = -1;

const nombres = document.getElementById("nombres");
const documento = document.getElementById("documento");
const correo = document.getElementById("correo");
const btnGuardar = document.getElementById("btnGuardar");
const tabla = document.getElementById("tablaDatos");

function guardarLocal() {
  localStorage.setItem("personas", JSON.stringify(datos));
}

function pintarTabla() {
  tabla.innerHTML = "";

  datos.forEach((p, i) => {
    tabla.innerHTML += `
      <tr>
        <td>${p.correo}</td>
        <td>${p.nombres}</td>
        <td>${p.documento}</td>
        <td>
          <button class="btn btn-sm btn-info" onclick="editar(${i})">Editar</button>
          <button class="btn btn-sm btn-danger" onclick="eliminar(${i})">Eliminar</button>
        </td>
      </tr>
    `;
  });
}

btnGuardar.addEventListener("click", () => {
  if (nombres.value === "" || documento.value === "" || correo.value === "") {
    alert("Completa todos los campos");
    return;
  }

  const existe = datos.some((p, i) => {
    if (i === editIndex) return false;
    return p.correo === correo.value || p.documento === documento.value;
  });

  if (existe) {
    alert("El correo o el documento ya están registrados");
    return;
  }

  const persona = {
    nombres: nombres.value,
    documento: documento.value,
    correo: correo.value
  };

  if (editIndex === -1) {
    datos.push(persona);
  } else {
    datos[editIndex] = persona;
    editIndex = -1;
  }

  guardarLocal();
  pintarTabla();

  nombres.value = "";
  documento.value = "";
  correo.value = "";
});

function eliminar(i) {
  const confirmar = confirm("¿Seguro que deseas eliminar este registro?");
  
  if (confirmar) {
    alert("Registro eliminado correctamente");
    datos.splice(i, 1);
    guardarLocal();
    pintarTabla();
  }
}

function editar(i) {
  alert("Vas a editar este registro");

  const p = datos[i];
  nombres.value = p.nombres;
  documento.value = p.documento;
  correo.value = p.correo;
  editIndex = i;
}

pintarTabla();
