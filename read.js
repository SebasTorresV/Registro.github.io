// Función para obtener los registros de torneo desde la API
function obtenerRegistros() {
    // Realizar una solicitud GET a la URL de la API
    fetch('https://script.google.com/macros/s/AKfycbzBafdMSJp1zVfwbyBOPjckP_k4GEvvtvHC1xA6h-UsUCw45NVDVG793AyvijB6i_ux/exec')
        .then(response => response.json()) // Convertir la respuesta a JSON
        .then(data => mostrarRegistros(data)) // Llamar a la función mostrarRegistros con los datos recibidos
        .catch(error => console.error('Error al obtener los registros:', error)); // Manejar errores
}

// Función para mostrar los registros en la tabla HTML
function mostrarRegistros(data) {
    // Obtener la referencia al cuerpo de la tabla
    var tablaRegistros = document.getElementById('tablaRegistros');
    // Limpiar cualquier contenido previo en la tabla
    tablaRegistros.innerHTML = '';
    // Iterar sobre cada registro en los datos recibidos
    data.registros.forEach((registro, index) => {
        // Crear una nueva fila en la tabla
        var fila = document.createElement('tr');
        // Agregar celdas para cada atributo del registro
        fila.innerHTML = `
            <td>${index + 1}</td>
            <td>${registro.nombre}</td>
            <td>${registro.apellido}</td>
            <td>${registro.numero}</td>
            <td>${registro.llave}</td>
            <td>${registro.email}</td>
            <td>${registro.torneo}</td>
            <td>${registro.fecha}</td>
        `;
        // Agregar la fila a la tabla
        tablaRegistros.appendChild(fila);
    });
}

// Llamar a la función obtenerRegistros al cargar la página
window.addEventListener('load', () => {
    obtenerRegistros();
    // Establecer un intervalo para actualizar los registros cada 10 segundos
    setInterval(obtenerRegistros, 10000);
});
