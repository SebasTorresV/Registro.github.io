const scriptURL = 'https://script.google.com/macros/s/AKfycbyODOm5HZY7lF3syAxmd-Br3C-VPgczrhWjcliKVX-xzIEbBynfv3ag8CVYOqokTTpc/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Gracias por registrarte al torneo." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error, no se pudo registrar', error.message))
})