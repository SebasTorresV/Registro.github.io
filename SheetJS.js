const scriptURL = 'https://script.google.com/macros/s/AKfycbyODOm5HZY7lF3syAxmd-Br3C-VPgczrhWjcliKVX-xzIEbBynfv3ag8CVYOqokTTpc/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Gracias por registrarte al torneo." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error, no se pudo registrar', error.message))
})

        // Deshabilitar el botón de envío después de hacer clic
        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('registroForm').addEventListener('submit', function() {
                document.getElementById('submitButton').disabled = true;
            });
        });

                // Obtenemos el elemento del campo de entrada del número
                var numeroInput = document.getElementById('Numero');
                // Limitamos la longitud del campo de entrada a 8 caracteres
                numeroInput.addEventListener('keydown', function(event) {
                    if (event.target.value.length === 8 && event.key !== 'Backspace' && event.key !== 'Delete') {
                        event.preventDefault(); // Prevenimos la acción predeterminada si la longitud es igual a 8
                    }
                });
        
                // Validamos el valor ingresado para permitir solo dígitos numéricos
                numeroInput.addEventListener('input', function(event) {
                    // Eliminamos cualquier caracter que no sea un dígito numérico
                    event.target.value = event.target.value.replace(/\D/g, '');
                });
        
                // Obtener la fecha actual en el formato YYYY-MM-DD en la zona horaria local
var fechaActual = new Date().toLocaleDateString('en-CA'); // Cambia 'en-CA' a la configuración de tu zona horaria si es diferente

// Establecer la fecha actual como el valor del campo de entrada de fecha
document.getElementById('fechaInput').value = fechaActual;
