document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario

    const formData = new FormData(this); // Recoge los datos del formulario
    const jsonData = {};

    // Convierte los datos del formulario en un objeto JSON
    formData.forEach((value, key) => { 
        jsonData[key] = value;
    });

    const jsonString = JSON.stringify(jsonData, null, 2); // Convierte el objeto JSON a una cadena

    // Simula la descarga del archivo JSON
    downloadJSON(jsonString, 'formulario_evento.json');

    // Muestra una ventana emergente informando que el formulario ha sido enviado
    alert('El formulario ha sido enviado con éxito');

    // Restablece el formulario
    this.reset();

    console.log(jsonString); // Muestra el JSON en la consola para fines de depuración
});

function downloadJSON(content, fileName) {
    const a = document.createElement('a'); // Crea un elemento <a>
    const file = new Blob([content], { type: 'application/json' }); // Crea un Blob con el contenido JSON
    a.href = URL.createObjectURL(file); // Crea una URL que apunta al Blob
    a.download = fileName; // Establece el nombre del archivo para la descarga
    a.click(); // Simula un clic en el enlace para iniciar la descarga
}

