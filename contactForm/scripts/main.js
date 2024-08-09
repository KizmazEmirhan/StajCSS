<<<<<<< HEAD
const format = /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/;
const letterFormat = /[a-zA-Z]+/;
const numberFormat = /[0-9]+/;
const emailFormat = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

const nameErr = document.getElementById("name-error");
const surnameErr = document.getElementById("surname-error");
const phoneErr = document.getElementById("phone-error");
const mailErr = document.getElementById("mail-error");
const companyErr = document.getElementById("company-error");
const passwordErr = document.getElementById("password-error");
=======
var format = /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/;
var letterFormat = /[a-zA-Z]+/;
var numberFormat = /[0-9]+/;
const emailFormat = new RegExp(
 /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
);
>>>>>>> 30023d604ef41e19b07e9545e95d81c7674dabd2

const nameErr = document.getElementById("name-error");
const surnameErr = document.getElementById("surname-error");
const phoneErr = document.getElementById("phone-error");
const mailErr = document.getElementById("mail-error");
const companyErr = document.getElementById("company-error");
const passwordErr = document.getElementById("password-error");

function removeClass(element, className, errorElement) {
  setTimeout(function () {
    element.classList.remove(className);
    errorElement.textContent = "";
  }, 2000);
}
function removeClass2(element, className) {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  }
}
function checkName(element) {
<<<<<<< HEAD
=======

>>>>>>> 30023d604ef41e19b07e9545e95d81c7674dabd2
  if (element.value.length < 3) {
    element.classList.add("name-active");
    nameErr.textContent = "isim en az 3 karakter olmalı";
    state = true;
  } else {
    element.classList.remove("name-active");
    nameErr.textContent = null;
    state = true;
  }
}
function checkSurname(element) {
  if (element.value.length < 5) {
    element.classList.add("surname-active");
    surnameErr.textContent = "Soyisim en az 5 karakter içermelidir";
    state = true;
  } else {
    element.classList.remove("surname-active");
    surnameErr.textContent = null;
    state = true;
  }
}
function checkPhone(element) {
  if (element.value.length < 11) {
    element.classList.add("phone-active");
    phoneErr.textContent = "Telefon numaranızı kontrol ediniz";
    state = true;
  } else if (element.value.indexOf("0") !== 0) {
    element.classList.add("phone-active");
    phoneErr.textContent = "Telefon numaranızı başında 0 ile girin";
  } else {
    element.classList.remove("phone-active");
    phoneErr.textContent = null;
    state = true;
  }
}
function checkMail(element) {
  if (!emailFormat.test(element.value)) {
    element.classList.add("mail-active");
    mailErr.textContent = "Emailiniz formata uygun değil";
    state = true;
  } else {
    element.classList.remove("mail-active");
    mailErr.textContent = null;
    state = true;
  }
}
function checkCompany(element) {
<<<<<<< HEAD
=======

>>>>>>> 30023d604ef41e19b07e9545e95d81c7674dabd2
  if (!numberFormat.test(element.value) || !letterFormat.test(element.value)) {
    element.classList.add("company-active");
    companyErr.textContent = "Şirket ismi harf ve rakam içermeli";
    state = true;
  } else {
    element.classList.remove("company-active");
    companyErr.textContent = null;
    state = true;
  }
}
function checkPassword(element) {
  if (element.value.length < 5) {
    element.classList.add("password-active");
    passwordErr.textContent = "Şifre en az 5 karakter olmalıdır";
    state = true;
  } else if (!format.test(element.value)) {
    element.classList.add("password-active");
    passwordErr.textContent = "Şifre özel karakterler içermelidir";
    state = true;
  } else if (!numberFormat.test(element.value)) {
    element.classList.add("password-active");
    passwordErr.textContent = "Şifrede rakam bulunmalıdır";
  } else {
    element.classList.remove("password-active");
    passwordErr.textContent = null;
    state = true;
  }
}

function clearPreviousClass() {
  var inputs = form.querySelectorAll("input");
  inputs.forEach(function (input) {
    input.classList.remove(
      "name-active",
      "phone-active",
      "surname-active",
      "mail-active",
      "company-active",
      "passwprd-active"
    );
  });
}

function checkCredentials(event) {
  var name = document.getElementById("name");
  var surname = document.getElementById("surname");
  var email = document.getElementById("mail");
  var phone = document.getElementById("phone");
  var company = document.getElementById("company");
  var password = document.getElementById("password");

  checkName(name);
  checkSurname(surname);
  checkCompany(company);
  checkMail(email);
  checkPassword(password);
  checkPhone(phone);

  if (state) {
    event.preventDefault();
  }
}
