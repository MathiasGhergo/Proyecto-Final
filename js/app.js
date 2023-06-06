function validarFormulario() {
  let inputs = document.getElementsByTagName('input');

  for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    if (input.required && !input.value) {
      alert('Por favor, complete todos los campos obligatorios.');
      return false;
    }
  }
  alert('Inicio de sesión exitoso.');
  return true;
}
