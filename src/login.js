// register.js

document
  .getElementById('registerForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtenir les dades del formulari
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const idNumber = document.getElementById('idNumber').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.getElementById('gender').value;
    const termsAccepted = document.getElementById('terms').checked;

    // Validacions dels camps del formulari

    // Validar que tots els camps estiguin omplerts
    if (
      !firstName ||
      !lastName ||
      !idNumber ||
      !email ||
      !password ||
      !birthdate ||
      !gender
    ) {
      alert('Cal omplir tots els camps.');
      return;
    }

    // Exemple de validació: La contrasenya ha de tenir almenys 6 caràcters
    if (password.length < 6) {
      alert('La contrasenya ha de tenir almenys 6 caràcters.');
      return;
    }

    // Exemple de validació: L'email ha de tenir un format vàlid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("L'adreça de correu electrònic no és vàlida.");
      return;
    }

    // Exemple de validació: L'usuari ha de ser major d'edat (pots personalitzar-ho)
    const today = new Date();
    const birthdateDate = new Date(birthdate);
    const age = today.getFullYear() - birthdateDate.getFullYear();
    if (age < 18) {
      alert("Has de ser major d'edat per registrar-te.");
      return;
    }

    // Exemple de validació: Verificar el format del DNI/NIF
    const idNumberRegex = /^[0-9A-Za-z]{1,10}$/;
    if (!idNumberRegex.test(idNumber)) {
      alert('El DNI/NIF no té un format vàlid.');
      return;
    }

    // Exemple de validació: Acceptar els Termes i Condicions
    if (!termsAccepted) {
      alert('Has de acceptar els Termes i Condicions.');
      return;
    }

    const formData = {
      firstName,
      lastName,
      idNumber,
      email,
      birthdate,
      gender,
    };

    // Emmagatzemar les dades a localStorage
    localStorage.setItem('formData', JSON.stringify(formData));

    // Redirigir a la pàgina de consulta meteorològica
    window.location.href = 'meteo.html';
  });
