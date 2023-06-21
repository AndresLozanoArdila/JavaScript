// Reglas de Validación
const numberRegex = /^\d{1,15}$/;
const textRegex = /^[a-zA-ZñÑá-úÁ-Ú]{2,50}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@misena\.edu\.co$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,30}$/;

let flag;

// DOCUMENTO IDENTIDAD
const form = document.getElementById('formulariovalida');
const numDocumento = form.numDocumento.value;
const f1 = document.querySelector('#numDocumento .feedback');

form.numDocumento.addEventListener('input', e => {
  e.preventDefault();
  if (numberRegex.test(e.target.value)) {
    form.numDocumento.classList.remove('is-invalid');
    form.numDocumento.classList.add('is-valid');
    f1.style.visibility = 'hidden';
    f1.style.opacity = '0';
    flag = true;
  } else {
    form.numDocumento.classList.remove('is-valid');
    form.numDocumento.classList.add('is-invalid');
    f1.textContent = "Solo puede digitar valores numéricos con una longitud mínima de 1 carácter y máxima de 15";
    f1.style.visibility = 'visible';
    f1.style.opacity = '1';
    flag = false;
  }
});

form.addEventListener("submit", e => {
  e.preventDefault();

  if (!form.numDocumento.value || form.numDocumento.value === 0 || flag === false) {
    alert("Debe ingresar un documento válido");
    form.numDocumento.focus();
    form.numDocumento.setAttribute("class", "form-control error");
  } else {
    form.submit();
  }
});

// NOMBRE
const nom = form.nom.value;
const f2 = document.querySelector('#nombre .feedback');

form.nom.addEventListener('input', e => {
  e.preventDefault();
  if (textRegex.test(e.target.value)) {
    form.nom.classList.remove('is-invalid');
    form.nom.classList.add('is-valid');
    f2.style.visibility = 'hidden';
    f2.style.opacity = '0';
    flag = true;
  } else {
    form.nom.classList.remove('is-valid');
    form.nom.classList.add('is-invalid');
    f2.textContent = "Solo puede ingresar datos alfabéticos";
    f2.style.visibility = 'visible';
    f2.style.opacity = '1';
    flag = false;
  }
});

form.addEventListener("submit", e => {
    e.preventDefault();
  
    if (!form.numDocumento.value || form.numDocumento.value === 0 || flag === false) {
      alert("Debe ingresar un documento válido");
      form.numDocumento.focus();
      form.numDocumento.setAttribute("class", "form-control error");
    } else if (!form.nom.value || flag === false) {
      alert("Debe ingresar un nombre válido");
      form.nom.focus();
      form.nom.setAttribute("class", "form-control error");
    } else {
      form.submit();
    }
  });

  // APELLIDO
const apellido = form.apellido.value;
const f3 = document.querySelector('#apellido .feedback');

form.apellido.addEventListener('input', e => {
  e.preventDefault();
  if (textRegex.test(e.target.value)) {
    form.apellido.classList.remove('is-invalid');
    form.apellido.classList.add('is-valid');
    f3.style.visibility = 'hidden';
    f3.style.opacity = '0';
    flag = true;
  } else {
    form.apellido.classList.remove('is-valid');
    form.apellido.classList.add('is-invalid');
    f3.textContent = "Solo puede ingresar datos alfabéticos";
    f3.style.visibility = 'visible';
    f3.style.opacity = '1';
    flag = false;
  }
});

form.addEventListener("submit", e => {
  e.preventDefault();

  if (!form.numDocumento.value || form.numDocumento.value === 0 || flag === false) {
    alert("Debe ingresar un documento válido");
    form.numDocumento.focus();
    form.numDocumento.setAttribute("class", "form-control error");
  } else if (!form.nom.value || flag === false) {
    alert("Debe ingresar un nombre válido");
    form.nom.focus();
    form.nom.setAttribute("class", "form-control error");
  } else if (!form.apellido.value || flag === false) {
    alert("Debe ingresar un apellido válido");
    form.apellido.focus();
    form.apellido.setAttribute("class", "form-control error");
  } else if (!form.email.value || flag === false) {
    alert("Debe ingresar un correo válido");
    form.email.focus();
    form.email.setAttribute("class", "form-control error");
  } else {
    form.submit();
  }
});
  
// FECHA DE NACIMIENTO
const fechaNacimiento = form.fechaNacimiento.value;
const f4 = document.querySelector('#fechaNacimiento .feedback');

form.fechaNacimiento.addEventListener('input', e => {
  e.preventDefault();
  const inputDate = new Date(e.target.value);
  const currentDate = new Date();
  const eighteenYearsAgo = new Date();
  eighteenYearsAgo.setFullYear(currentDate.getFullYear() - 18);

  if (!isNaN(inputDate) && inputDate <= currentDate && inputDate <= eighteenYearsAgo) {
    form.fechaNacimiento.classList.remove('is-invalid');
    form.fechaNacimiento.classList.add('is-valid');
    f4.style.visibility = 'hidden';
    f4.style.opacity = '0';
    flag = true;
  } else {
    form.fechaNacimiento.classList.remove('is-valid');
    form.fechaNacimiento.classList.add('is-invalid');
    f4.textContent = "Debe ser mayor de 18 años para registrarse";
    f4.style.visibility = 'visible';
    f4.style.opacity = '1';
    flag = false;
  }
});

  // CORREO ELECTRÓNICO
  const email = form.email.value;
  const f5 = document.querySelector('#email .feedback');
  
  form.email.addEventListener('input', e => {
    e.preventDefault();
    if (emailRegex.test(e.target.value)) {
      form.email.classList.remove('is-invalid');
      form.email.classList.add('is-valid');
      f5.style.visibility = 'hidden';
      f5.style.opacity = '0';
      flag = true;
    } else {
      form.email.classList.remove('is-valid');
      form.email.classList.add('is-invalid');
      f5.textContent = "Ingrese un correo válido con dominio misena.edu.co";
      f5.style.visibility = 'visible';
      f5.style.opacity = '1';
      flag = false;
    }
  });
  
  form.addEventListener("submit", e => {
    e.preventDefault();
  
    if (!form.numDocumento.value || form.numDocumento.value === 0 || flag === false) {
      alert("Debe ingresar un documento válido");
      form.numDocumento.focus();
      form.numDocumento.setAttribute("class", "form-control error");
    } else if (!form.nom.value || flag === false) {
      alert("Debe ingresar un nombre válido");
      form.nom.focus();
      form.nom.setAttribute("class", "form-control error");
    } else if (!form.email.value || flag === false) {
      alert("Debe ingresar un correo válido");
      form.email.focus();
      form.email.setAttribute("class", "form-control error");
    } else {
      form.submit();
    }
  });
  
  // CONTRASEÑA
const password = form.password.value;
const f6 = document.querySelector('#password .feedback');

form.password.addEventListener('input', e => {
  e.preventDefault();
  if (passwordRegex.test(e.target.value)) {
    form.password.classList.remove('is-invalid');
    form.password.classList.add('is-valid');
    f6.style.visibility = 'hidden';
    f6.style.opacity = '0';
    flag = true;
  } else {
    form.password.classList.remove('is-valid');
    form.password.classList.add('is-invalid');
    f6.textContent = "La contraseña debe tener entre 10 y 30 caracteres e incluir al menos una letra minúscula, una letra mayúscula, un número y un carácter especial (@$!%*?&)";
    f6.style.visibility = 'visible';
    f6.style.opacity = '1';
    flag = false;
  }
});

form.addEventListener("submit", e => {
  e.preventDefault();

  if (!form.numDocumento.value || form.numDocumento.value === 0 || flag === false) {
    alert("Debe ingresar un documento válido");
    form.numDocumento.focus();
    form.numDocumento.setAttribute("class", "form-control error");
  } else if (!form.nom.value || flag === false) {
    alert("Debe ingresar un nombre válido");
    form.nom.focus();
    form.nom.setAttribute("class", "form-control error");
  } else if (!form.apellido.value || flag === false) {
    alert("Debe ingresar un apellido válido");
    form.apellido.focus();
    form.apellido.setAttribute("class", "form-control error");
  } else if (!form.email.value || flag === false) {
    alert("Debe ingresar un correo válido");
    form.email.focus();
    form.email.setAttribute("class", "form-control error");
  } else if (!form.password.value || flag === false) {
    alert("Debe ingresar una contraseña válida");
    form.password.focus();
    form.password.setAttribute("class", "form-control error");
  } else {
    form.submit();
  }
});

  // CONFIRMAR CONTRASEÑA
const confirmPassword = form.confirmPassword.value;
const f7 = document.querySelector('#confirmPassword .feedback');

form.confirmPassword.addEventListener('input', e => {
  e.preventDefault();
  if (form.confirmPassword.value === form.password.value) {
    form.confirmPassword.classList.remove('is-invalid');
    form.confirmPassword.classList.add('is-valid');
    f7.style.visibility = 'hidden';
    f7.style.opacity = '0';
    flag = true;
  } else {
    form.confirmPassword.classList.remove('is-valid');
    form.confirmPassword.classList.add('is-invalid');
    f7.textContent = "Las contraseñas no coinciden";
    f7.style.visibility = 'visible';
    f7.style.opacity = '1';
    flag = false;
  }
});

form.addEventListener("submit", e => {
  e.preventDefault();

  if (!form.numDocumento.value || form.numDocumento.value === 0 || flag === false) {
    alert("Debe ingresar un documento válido");
    form.numDocumento.focus();
    form.numDocumento.setAttribute("class", "form-control error");
  } else if (!form.nom.value || flag === false) {
    alert("Debe ingresar un nombre válido");
    form.nom.focus();
    form.nom.setAttribute("class", "form-control error");
  } else if (!form.apellido.value || flag === false) {
    alert("Debe ingresar un apellido válido");
    form.apellido.focus();
    form.apellido.setAttribute("class", "form-control error");
  } else if (!form.email.value || flag === false) {
    alert("Debe ingresar un correo válido");
    form.email.focus();
    form.email.setAttribute("class", "form-control error");
  } else if (!form.password.value || flag === false) {
    alert("Debe ingresar una contraseña válida");
    form.password.focus();
    form.password.setAttribute("class", "form-control error");
  } else if (!form.confirmPassword.value || flag === false) {
    alert("Debe confirmar la contraseña");
    form.confirmPassword.focus();
    form.confirmPassword.setAttribute("class", "form-control error");
  } else {
    form.submit();
  }
});
  

function mostrarTerminos() {
    const modalTerminos = document.getElementById('modalTerminos');
    modalTerminos.style.display = 'block';
  }
  
  function cerrarTerminos() {
    const modalTerminos = document.getElementById('modalTerminos');
    modalTerminos.style.display = 'none';
  }