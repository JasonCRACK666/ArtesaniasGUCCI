window.addEventListener('DOMContentLoaded', () => {
  const nameInput = document.getElementById('nameInput');
  const correoInput = document.getElementById('correoInput');
  const alertError = document.getElementById('alertError');
  const btnPass = document.getElementById('btn');
  const btnNext = document.getElementById('next');

  btnPass.addEventListener('click', (e) => {
    let error = validacion();
    if(error[0]) {
      alertError.innerHTML = error[1];
      alertError.classList.add('error');
    } else {
      btnPass.setAttribute('hidden', 'true');
      btnNext.style.display = 'block'
    }
  })

  const validacion = () => {
    let error = [];
    if (nameInput.value.length < 5) {
      error[0] = true;
      error[1] = 'El nombre no puede tener menos de 5 caracteres.';
      return error;
    } else if (nameInput.value.length > 40) {
      error[0] = true;
      error[1] = 'El nombre no puede tener más de 40 caracteres.';
      return error;
    } else if (correoInput.value === "") {
      error[0] = true;
      error[1] = 'Falta que pongas tu correo';
      return error;
    } else if (correoInput.value.length < 5) {
      error[0] = true;
      error[1] = 'El correo no puede tener menos de 5 caracteres.';
      return error;
    } else if (correoInput.value.length > 50) {
      error[0] = true;
      error[1] = 'El correo no puede tener más de 50 caracteres.';
      return error;
    } else if (correoInput.value.indexOf('@') == -1) {
      error[0] = true;
      error[1] = 'El correo invalido falta el "@"';
      return error;
    } else if (correoInput.value.indexOf(".com") == -1) {
      error[0] = true;
      error[1] = 'El correo invalido falta el ".com"';
      return error;
    }
    error[0] = false;
    return error;
  }
})