var link = document.querySelector(".btn_feedback");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal_close");
var form = popup.querySelector("form");
var yourName = popup.querySelector("[id=modal_name]");
var email = popup.querySelector("[id=modal_email]");

var isStorageSupport = true;
var storage = "";
  
try {
    storage = localStorage.getItem("yourName");
  } catch (err) {
    isStorageSupport = false;
  }

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal_show");
    if (storage) {
      yourName.value = storage;
      email.focus();
    } else {
      yourName.focus();
    }
  });

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal_show");
    popup.classList.remove("modal_error");
  });

form.addEventListener("submit", function (evt) {
    if (!yourName.value || !email.value) {
      evt.preventDefault();
      popup.classList.remove("modal_error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal_error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("yourName", yourName.value);
      }
    }
  });

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal_show")) {
        popup.classList.remove("modal_show");
        popup.classList.remove("modal_error");
      }
    }
  });