// Define una función para obtener los registros desde la hoja de cálculo de Google
function obtenerRegistros() {
    // Realiza una solicitud GET al servidor (función doGet en Google Apps Script)
    fetch('https://script.google.com/macros/s/AKfycbzBafdMSJp1zVfwbyBOPjckP_k4GEvvtvHC1xA6h-UsUCw45NVDVG793AyvijB6i_ux/exec')
        .then(response => response.json()) // Convierte la respuesta a formato JSON
        .then(data => mostrarRegistros(data)) // Llama a la función mostrarRegistros con los datos obtenidos
        .catch(error => console.error('Error al obtener los registros:', error)); // Maneja errores
}

// Define una función para mostrar los registros en la página HTML
function mostrarRegistros(registros) {
    // Obtén el elemento de la tabla donde se mostrarán los registros
    var tabla = document.getElementById('registroTabla');
    var tbody = tabla.querySelector('tbody');

    // Borra cualquier fila existente en la tabla
    tbody.innerHTML = '';

    // Itera sobre los registros y crea filas para cada uno
    registros.forEach((registro, index) => {
        var fila = `
            <tr>
                <td>${index + 1}</td>
                <td>${registro.nombre}</td>
                <td>${registro.apellido}</td>
                <td>${registro.numero}</td>
                <td>${registro.llave}</td>
                <td>${registro.email}</td>
                <td>${registro.torneo}</td>
                <td>${registro.fecha}</td>
            </tr>
        `;
        tbody.innerHTML += fila; // Agrega la fila a la tabla
    });
}

// Ejecuta la función obtenerRegistros cuando se carga la página
document.addEventListener('DOMContentLoaded', obtenerRegistros);
