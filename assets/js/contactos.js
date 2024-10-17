$(document).ready(function () {

  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const themeText = document.getElementById('theme-text');
  let selectImg = document.querySelector('.navbar .navbar-brand img')

  let isDarkMode = false;

  function toggleTheme() {
    const htmlElement = document.documentElement;
    if (htmlElement.getAttribute('data-bs-theme') === 'light') {
      htmlElement.setAttribute('data-bs-theme', 'dark');
      selectImg.src = 'assets/img/iconoWesley.png';
      htmlElement.classList.add('dark');
      themeIcon.classList.remove('bi-sun-fill');
      themeIcon.classList.add('bi-moon-fill');
      themeText.textContent = 'Dark';
    } else {
      htmlElement.setAttribute('data-bs-theme', 'light');
      htmlElement.classList.remove('dark');
      selectImg.src = 'assets/img/iconoWesley_1.png';
      themeIcon.classList.remove('bi-moon-fill');
      themeIcon.classList.add('bi-sun-fill');
      themeText.textContent = 'Light';
    }
    isDarkMode = !isDarkMode;
  }

  themeToggle.addEventListener('click', toggleTheme);


  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ ]{1,30}$/,
    correo: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    string: /^[a-zA-ZÀ-ÿ]+([a-zA-ZÀ-ÿ0-9#\s,.-]){3,50}$/,
    telefono: /^[0-9]{10,30}$/
  }

  function validarCorreo(input, div, mensaje) {
    parametro = input.val();
    let valid = expresiones.correo.test(parametro);

    if (parametro == null || parametro == "") {
      div.text(mensaje + " debe introducir datos.")
      input.addClass('input-error');
      return false
    }
    if (!valid) {
      div.text(mensaje + " debe introducir un correo válido.")
      input.addClass('input-error');
      return false

    } else {
      div.text(" ");
      input.removeClass('input-error');
      return true
    }
  }

  function validarTelefono(input, div, mensaje) {
    parametro = input.val();
    let valid = expresiones.telefono.test(parametro);
    if (parametro == null || parametro == "") {
      div.text(mensaje + " debe introducir datos.")
      input.addClass('input-error');
      return false
    } else if (!valid) {
      div.text(mensaje + " debe contener mas de 10 dígitos.")
      input.addClass('input-error');
      return false
    } else if (parametro.length < 10) {
      div.text(mensaje + " debe introducir maximo 10 carácteres.")
      input.addClass('input-error');
      return false
    } else {
      div.text(" ");
      input.removeClass('input-error');
      return true
    }
  }

  function validarNombre(input, div, mensaje) {
    parametro = input.val();
    let valid = expresiones.nombre.test(parametro);

    if (parametro == null || parametro == "") {
      div.text(mensaje + " debe introducir datos.")
      input.addClass('input-error');
      return false
    } else if (!valid) {
      div.text(mensaje + " el nombre debe ser solo letras")
      input.addClass('input-error');
      return false
    } else if (parametro.length < 3) {
      div.text(mensaje + " el nombre debe tener mínimo 3 carácteres.")
      input.addClass('input-error');
      return false
    } else {
      div.text(" ");
      input.removeClass('input-error');
      return true
    }
  }

  let timeoutId
  let time = 400

  $('#email').keyup(() => {
    clearTimeout(timeoutId); 
    timeoutId = setTimeout(() => {
        validarCorreo($('#email'), $('.error1'), 'correo invalido'); 
    }, time); 
});
    

$('#telefono').keyup(() => { 
  clearTimeout(timeoutId); 
  timeoutId = setTimeout(() => {
    validarTelefono($('#telefono'), $('.error2'), 'Telefono invalido')  
  }, time);
});

$('#name').keyup(() => { 
  clearTimeout(timeoutId); 
  timeoutId = setTimeout(() => {
    validarNombre($('#name'), $('.error3'), 'nombre invalido') 
  }, time);
});

let name, telefono, correo;

$('#registrar').click(function (e) {
  e.preventDefault();

  let email = validarCorreo($('#email'), $('.error1'), 'correo invalido');
  let cell = validarTelefono($('#telefono'), $('.error2'), 'Telefono invalido');
  let nombre = validarNombre($('#name'), $('.error3'), 'nombre invalido');

  if (email && cell && nombre) {

    let successAlertShown = false;

    Swal.fire({
      title: 'Enviando correo...',
      html: 'Espere un momento por favor',
      timer: false, // Eliminar el temporizador
      timerProgressBar: false, // Eliminar la barra de progreso
      allowOutsideClick: false, // Bloquear el cierre de la alerta
      allowEscapeKey: false, // Bloquear el cierre de la alerta con la tecla Esc
      showConfirmButton: false, // Ocultar el botón de confirmación
      didOpen: () => {
        Swal.showLoading();
      }

    })

    name = $('#name').val();
    telefono = $('#telefono').val();
    correo = $('#email').val();

    $.ajax({
      method: 'POST',
      url: window.location.origin + '/Centro Medico Wesley/forms/contact.php',
      dataType: 'json',
      data: { name, telefono, correo },
      success(data) {
        if (data === 'Registrado con exito' && !successAlertShown) {
          $('.form')[0].reset()
          successAlertShown = true;
          Swal.fire({
            title: "Enviado con Éxito",
            text: "Presiona click en el botón!",
            icon: "success",
            showConfirmButton: true,
            confirmButtonText: "OK",
            customClass: {
              confirmButton: "btn btn-color"
            }
          });
        } else {
          Swal.fire({
            title: "Error al enviar el correo",
            text: "Ocurrió un error al enviar el correo. Por favor, inténtalo de nuevo más tarde.",
            icon: "error",
            showConfirmButton: true,
            confirmButtonText: "OK",
            customClass: {
              confirmButton: "btn btn-color"
            }
          });
        }
      }, complete: function () {
        if (!successAlertShown) {
          Swal.close();
        }
      }
    })

  } else {

  }


})


})