var format = /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/;
var letterFormat = /[a-zA-Z]+/;
var numberFormat = /[0-9]+/;
const emailFormat = new RegExp(
  /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
  "gm"
);

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
  console.log("uzunluk:", element.value.length);
  if (element.value.length < 3) {
    element.classList.add("name-active");
    document.getElementById("name-error").textContent =
      "isim en az 3 karakter olmalı";
    state = true;
  } else {
    element.classList.remove("name-active");
    document.getElementById("name-error").textContent = null;
    state = true;
  }
}
function checkSurname(element) {
  if (element.value.length < 5) {
    element.classList.add("surname-active");
    document.getElementById("surname-error").textContent =
      "Soyisim en az 5 karakter içermelidir";
    state = true;
  } else {
    element.classList.remove("surname-active");
    document.getElementById("surname-error").textContent = null;
    state = true;
  }
}
function checkPhone(element) {
  if (element.value.length < 11) {
    element.classList.add("phone-active");
    document.getElementById("phone-error").textContent =
      "Telefon numaranızı kontrol ediniz";
    state = true;
  } else if (element.value.indexOf("0") !== 0) {
    element.classList.add("phone-active");
    document.getElementById("phone-error").textContent =
      "Telefon numaranızı başında 0 ile girin";
  } else {
    element.classList.remove("phone-active");
    document.getElementById("phone-error").textContent = null;
    state = true;
  }
}
function checkMail(element) {
  if (!emailFormat.test(element.value)) {
    element.classList.add("mail-active");
    document.getElementById("mail-error").textContent =
      "Emailiniz formata uygun değil";
    state = true;
  } else {
    element.classList.remove("mail-active");
    document.getElementById("mail-error").textContent = null;
    state = true;
  }
}
function checkCompany(element) {
  console.log("number:", numberFormat.test(element.value));
  console.log("letter:", letterFormat.test(element.value));
  if (!numberFormat.test(element.value) || !letterFormat.test(element.value)) {
    element.classList.add("company-active");
    document.getElementById("company-error").textContent =
      "Şirket ismi harf ve rakam içermeli";
    state = true;
  } else {
    element.classList.remove("company-active");
    document.getElementById("company-error").textContent = null;
    state = true;
  }
}
function checkPassword(element) {
  if (element.value.length < 5) {
    element.classList.add("password-active");
    document.getElementById("password-error").textContent =
      "Şifre en az 5 karakter olmalıdır";
    state = true;
  } else if (!format.test(element.value)) {
    element.classList.add("password-active");
    document.getElementById("password-error").textContent =
      "Şifre özel karakterler içermelidir";
    state = true;
  } else {
    element.classList.remove("password-active");
    document.getElementById("password-error").textContent = null;
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
