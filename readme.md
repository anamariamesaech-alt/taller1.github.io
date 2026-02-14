# README – Repaso General de JavaScript

## Descripción

Este proyecto corresponde a una práctica integral de fundamentos de **JavaScript** aplicada al desarrollo de interfaces web. La finalidad es construir un frontend capaz de capturar información de usuarios mediante un formulario, almacenarla en el navegador y reflejar los cambios en tiempo real dentro de una tabla dinámica.

Durante el desarrollo se aplican principios esenciales como la manipulación del DOM, la persistencia de datos, las validaciones, y diferentes estrategias para manejar operaciones síncronas y asíncronas. El ejercicio permite comprender cómo interactúan la interfaz y la lógica del programa para ofrecer una experiencia fluida al usuario.


## Objetivo

Crear un sistema donde los usuarios puedan ingresar su **correo electrónico, nombre y número de documento**, guardar esa información en el **LocalStorage** y visualizar los registros almacenados en una tabla que se actualiza automáticamente cada vez que se agrega, modifica o elimina un dato.


## Funcionamiento de la aplicación

La aplicación parte de la captura de datos desde un formulario. Una vez que el usuario decide registrar la información, el sistema debe procesarla, verificar que cumpla ciertas reglas y almacenarla de manera local en el navegador para conservarla incluso después de recargar la página.

Los registros guardados se representan en una tabla generada dinámicamente. Esto implica leer la información almacenada, recorrerla y construir visualmente cada fila. Cuando ocurre cualquier cambio, la tabla debe sincronizarse nuevamente con los datos reales para evitar inconsistencias.

Además, el sistema contempla la posibilidad de administrar la información existente, permitiendo actualizar registros o eliminarlos, garantizando siempre que la vista mostrada coincida con el contenido del almacenamiento local.


## Validaciones

Un aspecto fundamental del proyecto es el control de integridad de los datos. Antes de guardar un nuevo usuario, el sistema debe comprobar que no existan coincidencias previas en campos clave como el correo electrónico y el número de documento. Si se detectan duplicados, se debe informar al usuario y cancelar el proceso de registro.

Estas validaciones permiten simular comportamientos comunes en aplicaciones reales donde ciertos datos deben ser únicos.


## Manejo del flujo del programa

La práctica también introduce diferentes formas de controlar la ejecución de tareas.

Se estudia el uso de **callbacks**, donde una función puede depender del resultado producido por otra. Este enfoque ayuda a entender cómo dividir responsabilidades y cómo reaccionar ante distintos escenarios, por ejemplo cuando una búsqueda arroja resultados positivos o negativos.


## Programación asíncrona

Otro componente importante es la comprensión de procesos que no responden de inmediato. Para ello se abordan las **promesas**, que representan valores que estarán disponibles en el futuro y que pueden finalizar correctamente o producir un error. Este mecanismo es clave para manejar validaciones, consultas o tiempos de espera.

Sobre esta base, se utiliza **async/await**, una sintaxis que simplifica la lectura del código asíncrono y permite escribir instrucciones que parecen ejecutarse en orden, aunque internamente dependan de operaciones que tardan cierto tiempo.


## Manejo de datos

Finalmente, el proyecto refuerza el uso de herramientas modernas del lenguaje como el **destructuring de objetos**, que facilita extraer propiedades específicas y trabajar únicamente con la información necesaria. Esta práctica mejora la claridad, reduce la repetición y hace el código más mantenible.


## Tecnologías utilizadas

La solución se desarrolla empleando tecnologías fundamentales del frontend:

* HTML para la estructura
* CSS para la presentación
* JavaScript para la lógica y la interacción


## Aprendizajes esperados

Al completar este ejercicio se fortalecen habilidades relacionadas con:

* Captura y gestión de datos desde interfaces web
* Persistencia de información en el navegador
* Actualización dinámica del contenido
* Implementación de reglas de validación
* Comprensión del comportamiento asíncrono
* Escritura de código más limpio y organizado
