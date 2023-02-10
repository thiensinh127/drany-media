'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * toggle navbar & overlay when click any navbar-link
 */

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}





/**
 * header & go-top-btn active
 * when window scroll down to 400px
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

/**
 * form contact
 */

const form = document.getElementById("contact-form");
const loader = document.getElementById("spinner");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  var data = {
    service_id: 'service_6rhpzpm',
    template_id: 'template_emxkzhh',
    user_id: 'Ktdl_UWjJWJLKodrh',
    template_params: {
        'userName': form.elements.name.value,
        'email' :form.elements.email.value,
        'phoneNumber' :form.elements.phoneNumber.value,
        'message' : form.elements.message?.value,
        'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
    }
};
loader.style.display = "block";
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://api.emailjs.com/api/v1.0/email/send");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(data));
  xhr.onload = function() {
    if (xhr.status === 200) {
      form.reset();
      alert(`Upload finished successfully.`);
    }
    loader.style.display = "none";
  }
});