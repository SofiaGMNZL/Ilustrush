// Contacto 


const formulario = document.querySelector('.medida-formulario-contacto');

function verificarCampos(event) {
  event.preventDefault(); 

  const nombre = document.querySelector('#Nombre').value.trim();
  const email = document.querySelector('#Email').value.trim();
  const asunto = document.querySelector('#Asunto').value.trim();
  const mensaje = document.querySelector('.mensaje-formulario').value.trim();

  if (!nombre || !email || !asunto || !mensaje || mensaje === 'Tu mensaje') {
    console.log('Por favor, completa todos los campos del formulario.');
  } else {
    console.log('Todos los campos están completos. ¡Formulario listo para enviar!');
    formulario.submit(); // Envía el formulario si todos los campos están completos
  }
}

// Agrega un evento "submit" al formulario
formulario.addEventListener('submit', verificarCampos);