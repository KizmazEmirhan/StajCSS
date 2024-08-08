var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
var letterFormat = /[a-zA-Z]+/;
var numberFormat = /[0-9]+/;
var form = document.querySelector("form");
var state = false;

function removeClass(element, className, errorElement) {
  setTimeout(function () {
    element.classList.remove(className);
    errorElement.textContent = "";
  }, 2000);
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
  state = false;
  var name = document.getElementById("name");
  var surname = document.getElementById("surname");
  var email = document.getElementById("mail");
  var phone = document.getElementById("phone");
  var company = document.getElementById("company");
  var password = document.getElementById("password");

  if (name.value.length < 3) {
    name.classList.add("name-active");
    document.getElementById("name-error").textContent =
      "İsim en az 3 harf olmalı";
    removeClass(name, "name-active", document.getElementById("name-error"));
    state = true;
  }
  if (surname.value.length < 5) {
    surname.classList.add("surname-active");
    document.getElementById("surname-error").textContent = removeClass(
      surname,
      "surname-active",
      document.getElementById("surname-error")
    );
    document.getElementById("surname-error").textContent =
      "Soyad en az 5 harf olmalı";
    state = true;
  }
  if (email.value.indexOf("@") == -1) {
    email.classList.add("mail-active");
    removeClass(email, "mail-active", document.getElementById("mail-error"));
    document.getElementById("mail-error").textContent =
      "E-posta formata uygun değil";

    state = true;
  }
  if (phone.value.length < 11) {
    phone.classList.add("phone-active");
    removeClass(phone, "phone-active", document.getElementById("phone-error"));
    document.getElementById("phone-error").textContent =
      "Telefonunuzu başında 0 ile girin";
    state = true;
  }
  if (
    letterFormat.test(company.value) == false ||
    numberFormat.test(company.value) == false
  ) {
    company.classList.add("company-active");
    removeClass(
      company,
      "company-active",
      document.getElementById("company-error")
    );
    document.getElementById("company-error").textContent =
      "Şirket ismi harf ve rakam içermeli";
    state = true;
  }
  if (password.value.length < 5) {
    password.classList.add("password-active");
    removeClass(
      password,
      "password-active",
      document.getElementById("password-error")
    );
    document.getElementById("password-error").textContent =
      "Şifre en az 5 karakterli olmalı";
    state = true;
  } else if (format.test(password.value) == false) {
    password.classList.add("password-active");
    removeClass(
      password,
      "password-active",
      document.getElementById("password-error")
    );
    document.getElementById("password-error").textContent =
      "Şifrede özel karakterler bulunmalı";
    state = true;
  }
  if (state) {
    event.preventDefault();
  }
}
