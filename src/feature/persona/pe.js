const person = {
  name: 'Juan Carlos Valencia',
  age: 30,
  city: 'Cali',
  profession: 'Desarrollador'
};

document.getElementById("btnMostrar").addEventListener("click", () => {
    
    // Destructuring del objeto
    const { name, age, profession } = person;

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `
        Nombre: ${name} <br>
        Edad: ${age} <br>
      Profesión: ${profession}
    `;
});


